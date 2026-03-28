export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const product = searchParams.get("product");
  const size = searchParams.get("size");

  const phone = process.env.WHATSAPP_NUMBER;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(
    `Order for ${product}, Size: ${size}`
  )}`;

  return Response.json({ url });
}