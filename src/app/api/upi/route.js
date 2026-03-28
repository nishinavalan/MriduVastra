export default function handler(req, res) {
  const { product, size, amount } = req.query;

  const upi = process.env.UPI_ID;

  const link = `upi://pay?pa=${upi}&pn=MriduVastra&am=${amount}&cu=INR&tn=${encodeURIComponent(
    `${product} - ${size}`
  )}`;

  res.status(200).json({ link });
}