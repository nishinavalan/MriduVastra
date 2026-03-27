import Image from "next/image";
import BabyWearSection from "./components/babywear/BabyWearSection";
import YogaWearPage from "../app/yogawear/page";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="bg-[#F9F6EE] pt-6 pb-4 px-6 text-center flex flex-col items-center rounded-b-3xl">
        {/* <div className="pt-1"></div> For spacing below fixed navbar */}
        <div className="shadow-xl rounded-3xl overflow-hidden border-2 border-[#D9A441] mb-2">
          <Image
            src="/images/hero.png"
            width={200}
            height={200}
            alt="MriduVastra Logo"
            className="object-contain"
          />
        </div>
        {/* <div className="p-10 text-4xl font-bold text-green-600">
                    Tailwind Working Successfully 🌿✨
                  </div> */}
        <p className="text-[#00473E] text-md md:text-lg font-medium tracking-wide">
          Earthy • Handcrafted • Premium Clothing
        </p>
      </section>
          <>
            <BabyWearSection title="Baby Wear Collection" />
          </>
      <YogaWearPage />
    </div>
  );
}
