import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product?id=${product.id}`}>
      <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
        
        <div className="aspect-3/4 overflow-hidden rounded-xl">
          <Image
            src={product.image}
            width={400}
            height={500}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 duration-300"
          />
        </div>

        <h3 className="font-semibold mt-3 text-lg">{product.name}</h3>
        <p className="text-green-800 font-bold">₹{product.price}</p>
      </div>
    </Link>
  );
}
