import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mriduvastra");

    const products = await db
      .collection("products")
      .find({})
      .toArray();

    // convert _id to string
    const safeProducts = products.map((p) => ({
      ...p,
      _id: p._id.toString(),
    }));

    return Response.json(safeProducts);
  } catch (error) {
    console.error("GET PRODUCTS ERROR:", error);

    // ALWAYS return array (prevents crash)
    return Response.json([]);
  }
}