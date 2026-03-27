"use client";

import { useEffect, useState } from "react";

export default function Dashboard(){

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    fetch("/api/get-products")
      .then(res=>res.json())
      .then(data=>setProducts(data));
  },[]);

  const deleteProduct = async(id)=>{

    if(confirm("Delete product?")){

      await fetch("/api/delete-product",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({id})
      });

      location.reload();
    }

  };

  return(

    <div className="max-w-6xl mx-auto px-6 mt-12">

      <h1 className="text-3xl font-semibold text-center text-green-900 mb-8">
        Admin Dashboard
      </h1>

      <div className="text-center mb-10">
        <a
          href="/admin/add-product"
          className="bg-green-900 text-white px-6 py-3 rounded-lg"
        >
          Add Product
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {products.map((p)=>(
          <div
            key={p._id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >

            <div className="p-5">

              <h2 className="text-lg font-medium text-green-900">
                {p.name}
              </h2>

              <p className="text-green-700 mt-2">
                ₹{p.price}
              </p>

              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={()=>deleteProduct(p._id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>

  );
}