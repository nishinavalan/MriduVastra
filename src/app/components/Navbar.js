"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";



export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#F9F6EE]/90 backdrop-blur-md border-b">
      <div className="max-w-xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Menu */}
        <ul className="flex gap-10 text-[#0D4735] font-medium tracking-wide">
          <li className="hover:text-[#D9A441] transition">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#D9A441] transition">
            <Link href="/babywear">Baby Wear</Link>
          </li>
          <li className="hover:text-[#D9A441] transition">
            <Link href="/yogawear">Yoga Wear</Link>
          </li>
          <li className="hover:text-[#D9A441] transition">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Dark Mode */}
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
