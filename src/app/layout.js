// src/app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "MriduVastra",
  description: "Muslin Baby Wear & Yoga Wear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#faf8ef] text-gray-900 dark:bg-[#0f172a] dark:text-white transition">
        <Navbar />
        <main className="pt-20 px-4 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
