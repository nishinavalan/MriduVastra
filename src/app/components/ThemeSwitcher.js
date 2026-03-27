"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load saved theme smoothly after hydration
    requestAnimationFrame(() => {
      const saved = localStorage.getItem("theme") || "light";
      document.documentElement.classList.add(saved);
      setTheme(saved);
      setMounted(true);
    });
  }, []);

  if (!mounted) return null;   // prevents hydration mismatch

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
    onClick={toggleTheme}
    className={`
      px-4 py-2 rounded-full font-medium text-sm shadow-md transition-all
      border border-[#D9A441]
      ${theme === "light" 
        ? "bg-[#083b37] text-[#D9A441] hover:bg-[#062d29]" 
        : "bg-[#ece6db] text-[#083b37] hover:bg-[#c0952f]"
      }
    `}
  >
    {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
  </button>
  );
}
