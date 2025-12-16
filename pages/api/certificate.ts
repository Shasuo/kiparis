import { mailTransportConfig } from '@/constants/mailTransportConfig';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FeedbackRequestBody {
  phone: string;
  procedure: string;
  toWhom: string
}

interface FeedbackResponse {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FeedbackResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { phone, procedure, toWhom } = req.body as FeedbackRequestBody;

  if (!phone || phone.includes('_') || !procedure || !toWhom) {
    return res.status(400).json({ message: 'Phone required' });
  }

  const transporter = nodemailer.createTransport(mailTransportConfig);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'nsk.kiparis@gmail.com',
    subject: 'Заявка на сертефикат',
    text: `Получена новая заявка:\n\nТелефон: ${phone}`,
    html: `
      <h3>Новая заявка на сертефикат</h3>
      <p><strong>Услуга/сумма:</strong> ${procedure}</p>
      <p><strong>Кому:</strong> ${toWhom}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Заявка успешно отправлена!' });
  } catch (error) {
    console.error('Ошибка отправки email:', error);
    res.status(500).json({ message: 'Ошибка отправки заявки. Попробуйте позже.' });
  }
}