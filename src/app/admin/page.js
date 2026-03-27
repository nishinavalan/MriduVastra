"use client";

import { useState } from "react";

export default function AdminLogin() {

  const [password,setPassword] = useState("");

  const handleLogin = async () => {

    const res = await fetch("/api/admin-login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({password})
    });

    const data = await res.json();

    if(data.success){
      window.location.href="/admin/dashboard";
    } else{
      alert("Wrong password");
    }

  };

  return(
    <div className="flex flex-col items-center mt-20">

      <h1 className="text-2xl mb-4">Admin Login</h1>

      <input
        type="password"
        placeholder="Enter password"
        className="border p-2"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button
        className="bg-black text-white px-4 py-2 mt-3"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  )
}