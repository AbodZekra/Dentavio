export default async function handler(req, res) {
    // السماح بالوصول من أي موقع
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // معالجة طلب OPTIONS (للمتصفحات)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // التأكد من أن الطلب POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'الطريقة غير مسموحة' });
    }

    try {
        // قراءة البيانات المرسلة
        const { message, chatId } = req.body;
        
        // جلب التوكن من متغيرات البيئة في Vercel
        const token = process.env.TELEGRAM_BOT_TOKEN;
        
        if (!token) {
            return res.status(500).json({ error: 'التوكن غير موجود' });
        }

        // إرسال الرسالة إلى تليغرام
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId || process.env.DEFAULT_CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        const data = await response.json();
        
        // إرجاع النتيجة للموقع
        res.status(200).json(data);
        
    } catch (error) {
        console.error('خطأ:', error);
        res.status(500).json({ error: 'فشل الإرسال' });
    }
}