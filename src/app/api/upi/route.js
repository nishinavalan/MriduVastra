export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const product = searchParams.get("product");
  const size = searchParams.get("size");
  const amount = searchParams.get("amount");

  const upi = process.env.UPI_ID;

  const link = `upi://pay?pa=${upi}&pn=MriduVastra&am=${amount}&cu=INR&tn=${encodeURIComponent(
    `${product} - ${size}`
  )}`;

  return Response.json({ link });
}