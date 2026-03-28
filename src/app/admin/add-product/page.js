"use client";

import { useState } from "react";

export default function AddProduct(){

  const [name,setName] = useState("");
  const [price,setPrice] = useState("");

  const handleSubmit = async (e)=>{

    e.preventDefault();

    await fetch("/api/products",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        price
      })
    });

    alert("Product Added");

    window.location.href="/admin/dashboard";

  };

  return(

    <div className="max-w-md mx-auto mt-16 bg-white dark:bg-gray-900 text-black dark:text-white p-8 rounded-xl shadow">

      <h1 className="text-2xl font-semibold text-green-900 mb-6 text-center">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

        <input
          type="text"
          placeholder="Product Name"
          className="border rounded-lg p-2"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="border rounded-lg p-2"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          required
        />

        <button
          className="bg-green-900 text-white py-2 rounded-lg"
        >
          Save Product
        </button>

      </form>

    </div>

  );

}