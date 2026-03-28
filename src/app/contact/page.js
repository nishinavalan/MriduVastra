"use client";

export default function ContactPage() {

  const handleWhatsApp = async () => {
    try {
      const res = await fetch(
        `/api/whatsapp?text=${encodeURIComponent("Hi, I want to know more about your products")}`
      );

      const data = await res.json();
      window.location.href = data.url;

    } catch (err) {
      console.error(err);
      alert("Please try again");
    }
  };

  return (
    <section className="px-4 py-10 flex justify-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md text-center space-y-4">

        <h2 className="text-2xl font-semibold text-[#054B43]">
          Contact Us
        </h2>

        <p className="text-gray-600 dark:text-gray-300">
          We’re happy to help you with orders, sizing guidance, delivery timelines, or anything related to our brand.
        </p>

        <button
          onClick={handleWhatsApp}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition min-h-[44px]"
        >
          💬 Chat on WhatsApp
        </button>

      </div>
    </section>
  );
}