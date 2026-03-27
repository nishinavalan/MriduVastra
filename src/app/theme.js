"use client";
export function initTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.classList.add(saved);
}
