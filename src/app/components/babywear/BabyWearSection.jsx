"use client";

import Link from "next/link";
import Image from "next/image";
import { babyProductsall } from "../../data/babyProducts";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function BabyWearSection({ title = "Baby Wear Collection" }) {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: { perView: 1.1, spacing: 12 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2.2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3.2, spacing: 24 } },
    },
  });

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      
      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#054B43]">
        {title}
      </h2>

      {/* SLIDER */}
      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {babyProductsall.map((item) => {
          
          // ✅ SAFE IMAGE
          let imageSrc = null;

          if (Array.isArray(item.images) && item.images.length > 0) {
            imageSrc = item.images[0];
          } else if (item.variants?.length > 0) {
            imageSrc = item.variants[0].image;
          }

          if (!imageSrc) return null;

          return (
            <div
              key={item.id}
              className="keen-slider__slide flex justify-center"
            >
              
              {/* CARD */}
              <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden flex flex-col">

                {/* IMAGE */}
                <div className="relative w-full aspect-3/4">
                  <Image
                    src={imageSrc}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* DETAILS */}
                <div className="p-4 flex flex-col gap-2">

                  <h3 className="font-semibold text-[#054B43] dark:text-white text-sm md:text-base">
                    {item.name}
                  </h3>

                  <p className="text-green-700 font-medium text-sm md:text-base">
                    ₹{item.price}
                  </p>

                  {/* BUTTON */}
                  <Link
                    href={`/product?id=${item.id}`}
                    className="mt-auto text-center bg-[#054B43] text-white px-4 py-3 rounded-xl hover:bg-[#033B33] transition min-h-[44px]"
                  >
                    View Details →
                  </Link>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}