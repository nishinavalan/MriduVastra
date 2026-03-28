"use client";

import { yogaProducts } from "../../data/yogaProducts";
import Link from "next/link";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function YogaWearSection({ title = "Yoga Wear Collection" }) {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 24 },
      },
    },
  });

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#054B43]">
        {title}
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {yogaProducts.map((item) => {
                    let imageSrc = null;

          if (Array.isArray(item.images) && item.images.length > 0) {
            imageSrc = item.images[0];
          } else if (item.variants?.length > 0) {
            imageSrc = item.variants[0].image;
          }
          if (!imageSrc) return null;
          return (
          <div key={item.id} className="keen-slider__slide">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
              <div className="relative h-[520px] w-full">
                  <Image
                    src={imageSrc}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 33vw"
                    className="object-cover object-center w-full h-full"
                  />
              </div>
              <div className="p-4 text-left">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-green-700 font-medium">₹{item.price}</p>
                <Link
                  href={`/product?id=${item.id}`}
                  className="mt-auto inline-block bg-[#054B43] text-white px-4 py-2 rounded-lg hover:bg-[#033B33] transition"

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
