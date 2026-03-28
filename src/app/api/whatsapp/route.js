export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const product = searchParams.get("product");
  const size = searchParams.get("size");
  const text = searchParams.get("text");

  const phone = process.env.WHATSAPP_NUMBER;

  let message = "";

  // ✅ Product page flow
  if (product) {
    message = `Order for ${product}${size ? `, Size: ${size}` : ""}`;
  }
  // ✅ Contact page flow
  else if (text) {
    message = text;
  }
  // ✅ Default fallback
  else {
    message = "Hi, I would like to know more about your products";
  }

  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

  return Response.json({ url });
}