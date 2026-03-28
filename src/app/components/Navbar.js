"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#F9F6EE]/90 dark:bg-[#0f172a]/90 backdrop-blur-md border-b">
      
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="font-semibold text-lg text-[#0D4735] dark:text-white"
        >
          MriduVastra
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-xl text-[#0D4735] dark:text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* MENU */}
        <div
          className={`absolute md:static top-14 left-0 w-full md:w-auto 
          bg-[#F9F6EE] dark:bg-[#0f172a] md:bg-transparent 
          transition-all ${open ? "block" : "hidden md:flex"}`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left p-4 md:p-0">

            <li>
              <Link
                href="/"
                className="text-[#0D4735] dark:text-gray-200 hover:text-[#D9A441] transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/babywear"
                className="text-[#0D4735] dark:text-gray-200 hover:text-[#D9A441] transition"
              >
                Baby Wear
              </Link>
            </li>

            <li>
              <Link
                href="/yogawear"
                className="text-[#0D4735] dark:text-gray-200 hover:text-[#D9A441] transition"
              >
                Yoga Wear
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-[#0D4735] dark:text-gray-200 hover:text-[#D9A441] transition"
              >
                Contact
              </Link>
            </li>

            {/* THEME SWITCHER (MOBILE) */}
            <li className="md:hidden">
              <ThemeSwitcher />
            </li>

          </ul>
        </div>

        {/* THEME SWITCHER (DESKTOP) */}
        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>

      </div>
    </nav>
  );
}