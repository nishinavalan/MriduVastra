"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import BabyWearSlider from "../components/babywear/BabyWearSlider";
import { babyProductsall } from "../data/babyProducts";
import { yogaProducts } from "../data/yogaProducts";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  /* ---------------- PRODUCT ---------------- */
  const product = [...babyProductsall, ...yogaProducts].find(
    (p) => p.id === id
  );

  /* ---------------- STATES ---------------- */
  const [selectedSize, setSelectedSize] = useState(null);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.type === "color-variant" ? product?.variants?.[0] : null
  );

  /* ---------------- GUARD ---------------- */
  if (!product) {
    return <h1 className="p-10 text-center text-xl">Product Not Found</h1>;
  }

  /* ---------------- IMAGE ---------------- */
  const images =
    product.type === "color-variant"
      ? selectedVariant
        ? [selectedVariant.image]
        : product.variants?.map((v) => v.image) || []
      : product.images || [];

  /* ---------------- STOCK ---------------- */
  const isOutOfStock = (size) => {
    if (product.type === "assorted-pack") {
      return product.stockBySize?.[size] === 0;
    }
    if (product.type === "color-variant") {
      return selectedVariant?.stockBySize?.[size] === 0;
    }
    return false;
  };

  /* ---------------- VALIDATION ---------------- */
  const canProceed = !!selectedSize;
  // const canProceed =
  //   selectedSize &&
  //   (product.type === "assorted-pack" ||
  //     (product.type === "color-variant" || product.type === "tshirt" && selectedVariant));

  /* ---------------- UPI ---------------- */
  const upiLink = `upi://pay?pa=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}&pn=MriduVastra&am=${product.price}&cu=INR&tn=${encodeURIComponent(
  product.name + " - " + selectedSize
)}`;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* BACK */}
      <button
        onClick={() => window.history.back()}
        className="mb-6 text-sm underline"
      >
        ← Back
      </button>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2">
          <BabyWearSlider images={images} productName={product.name} />
        </div>

        {/* DETAILS */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-xl text-green-700">₹{product.price}</p>

          {/* SIZE */}
          <div>
            <p className="text-sm mb-2">Select Size</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => {
                const out = isOutOfStock(size);

                return (
                  <button
                    key={size}
                    disabled={out}
                    onClick={() => !out && setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full text-xs border
                      ${
                        out
                          ? "bg-gray-200 text-gray-400 line-through cursor-not-allowed"
                          : selectedSize === size
                          ? "bg-black text-white"
                          : "bg-white"
                      }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            {/* WHATSAPP */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                if (!canProceed) {
                  alert("Please select size");
                  return;
                }

                window.location.href = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Order for ${product.name}, Size: ${selectedSize}`
                )}`;
              }}
              className={`flex-1 text-center py-3 rounded-xl font-semibold
                ${
                  canProceed
                    ? "bg-green-600 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
            >
              🟢 WhatsApp
            </a>

            {/* UPI */}
            <a
              href={
                canProceed
                  ? `/upi?link=${encodeURIComponent(upiLink)}`
                  : "#"
              }
              onClick={(e) => {
                if (!canProceed) {
                  e.preventDefault();
                  alert("Please select size");
                }
              }}
              className={`flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold
                ${
                  canProceed
                    ? "bg-[#033B33] text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              💳 Pay ₹{product.price} via UPI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}