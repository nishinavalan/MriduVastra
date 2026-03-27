import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(request){

  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("mriduvastra");

  await db.collection("products")
        .deleteOne({_id:new ObjectId(body.id)});

  return Response.json({success:true});
}