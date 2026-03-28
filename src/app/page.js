import Image from "next/image";
import BabyWearSection from "./components/babywear/BabyWearSection";
import YogaWearPage from "../app/yogawear/page";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="bg-[#F9F6EE] py-6 px-4 md:px-6 text-center flex flex-col items-center rounded-b-3xl">
        {/* <div className="pt-1"></div> For spacing below fixed navbar */}
        <div className="shadow-xl rounded-3xl overflow-hidden border-2 border-[#D9A441] mb-2">
          <Image
            src="/images/hero.png"
            width={200}
            height={200}
            alt="MriduVastra Logo"
            className="w-28 md:w-40 h-auto"
          />
        </div>
        <div className="p-5 text-xl font-bold text-green-600">
          🌿 100% Cotton | 👶 Soft on skin | 🚚 Fast Delivery
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
