export async function POST(request){

  const body = await request.json();
  console.log("ENV PASSWORD:", process.env.ADMIN_PASSWORD);
  console.log("INPUT PASSWORD:", body.password);
  if( body.password === process.env.ADMIN_PASSWORD){
    return Response.json({success:true});
  }

  return Response.json({success:false});
}