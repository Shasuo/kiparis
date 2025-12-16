import { mailTransportConfig } from '@/constants/mailTransportConfig';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FeedbackRequestBody {
  phone: string;
  procedure: string;
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

  const { phone, procedure } = req.body as FeedbackRequestBody;

  if (!phone || phone.includes('_')) {
    return res.status(400).json({ message: 'Phone required' });
  }

  const transporter = nodemailer.createTransport(mailTransportConfig);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'nsk.kiparis@gmail.com',
    subject: 'Новая заявка с сайта',
    text: `Получена новая заявка:\n\nТелефон: ${phone}\nПроцедура: ${procedure}`,
    html: `
      <h3>Новая заявка с сайта</h3>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Процедура:</strong> ${procedure}</p>
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