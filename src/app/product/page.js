"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BabyWearSlider from "../components/babywear/BabyWearSlider";
import { babyProductsall } from "../data/babyProducts";
import { yogaProducts } from "../data/yogaProducts";

/* ---------------- MAIN WRAPPER ---------------- */
export default function ProductPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ProductContent />
    </Suspense>
  );
}

/* ---------------- ACTUAL CONTENT ---------------- */
function ProductContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  /* ---------------- PRODUCT ---------------- */
  const product =
    id &&
    [...babyProductsall, ...yogaProducts].find((p) => p.id === id);

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

  /* ---------------- HANDLERS ---------------- */

  // WhatsApp handler (SAFE - backend)
  const handleWhatsApp = async () => {
    if (!canProceed) {
      alert("Please select size");
      return;
    }

    try {
      const res = await fetch(
        `/api/whatsapp?product=${encodeURIComponent(
          product.name
        )}&size=${selectedSize}`
      );

      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      alert("Something went wrong");
    }
  };

  // UPI handler (SAFE - backend)
  const handleUPI = async () => {
    if (!canProceed) {
      alert("Please select size");
      return;
    }

    try {
      const res = await fetch(
        `/api/upi?product=${encodeURIComponent(
          product.name
        )}&size=${selectedSize}&amount=${product.price}`
      );

      const data = await res.json();

      // redirect to QR page
      window.location.href = `/upi?link=${encodeURIComponent(data.link)}`;
    } catch (err) {
      alert("Payment error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:px-6">
      {/* BACK */}
      <button
        onClick={() => window.history.back()}
        className="mb-6 text-sm underline"
      >
        ← Back
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <BabyWearSlider images={images} productName={product.name} />
        </div>

        {/* DETAILS */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="text-xl md:text-2xl font-semibold">
            {product.name}
          </h1>

          <p className="text-lg md:text-xl text-green-700">
            ₹{product.price}
          </p>

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
                    className={`px-4 py-2.5 rounded-full text-sm border transition
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
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            {/* WHATSAPP */}
            <button
              onClick={handleWhatsApp}
              className={`w-full text-center py-3 rounded-xl font-semibold transition
                ${
                  canProceed
                    ? "bg-green-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              🟢 WhatsApp
            </button>

            {/* UPI */}
            <button
              onClick={handleUPI}
              className={`w-full text-center py-3 rounded-xl font-semibold transition
                ${
                  canProceed
                    ? "bg-[#033B33] text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              💳 Pay ₹{product.price} via UPI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}