interface SendFeedbackParams {
  phoneNumber: string;
  procedure: string;
}

export const sendFeedback = async ({
  phoneNumber,
  procedure,
}: SendFeedbackParams): Promise<{ success: boolean; message: string }> => {

  try {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phoneNumber,
        procedure: procedure,
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