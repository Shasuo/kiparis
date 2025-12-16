interface SendFeedbackParams {
  phoneNumber: string;
  procedure: string;
  toWhom: string
}

export const sendCertificate = async ({
  phoneNumber,
  procedure,
  toWhom
}: SendFeedbackParams): Promise<{ success: boolean; message: string }> => {

  try {
    const response = await fetch('/api/certificate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phoneNumber,
        procedure: procedure,
        toWhom: toWhom
      }),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ Заявка успешно отправлена!');
      console.log('📩 Ответ сервера:', result.message);
      return { success: true, message: result.message };
    } else {
      console.error('❌ Ошибка от сервера:', result.message);
      return { success: false, message: result.message };
    }
  } catch (error) {
    console.error('💥 Критическая ошибка при отправке:', error);
    return { success: false, message: 'Не удалось отправить заявку. Попробуйте позже.' };
  } finally {
    console.log('🏁 Отправка завершена (finally)');
  }
};