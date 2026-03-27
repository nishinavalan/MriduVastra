"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState } from "react";

export default function BabyWearSlider({ images, productName }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative w-full max-w-md">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
        {images.map((img, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="relative aspect-4/5 w-full">
              <Image
                src={img}
                alt={`${productName} view ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
      >
        ◀
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`h-2 w-2 rounded-full ${
              currentSlide === idx ? "bg-[#054B43]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
