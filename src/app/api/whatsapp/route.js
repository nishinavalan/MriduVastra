export default function handler(req, res) {
  const { product, size } = req.query;

  const phone = process.env.WHATSAPP_NUMBER;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(
    `Order for ${product}, Size: ${size}`
  )}`;

  res.status(200).json({ url });
}