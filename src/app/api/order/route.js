import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const body = await req.json();

  const client = await clientPromise;
  const db = client.db("mriduvastra");

  await db.collection("orders").insertOne({
    product: body.product,
    size: body.size,
    color: body.color || null,
    price: body.price,
    createdAt: new Date(),
  });

  return Response.json({ success: true });
}