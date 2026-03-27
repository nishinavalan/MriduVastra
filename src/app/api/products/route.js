import clientPromise from "@/lib/mongodb";

export async function POST(request){

  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("mriduvastra");

  const result = await db
        .collection("products")
        .insertOne(body);

  return Response.json(result);
}