export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md text-center space-y-4">

  <h2 className="text-2xl font-semibold text-[#054B43]">
    Contact Us
  </h2>

  <p className="text-gray-600 dark:text-gray-300">
    We’re here to help you with orders, sizing guidance, delivery timelines, or anything related to MriduVastra.
  </p>

  <div className="text-sm text-gray-500">
    🕒 Available: 9 AM – 8 PM
  </div>

  <a
    href="/api/whatsapp"
    className="block w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
  >
    💬 Chat on WhatsApp
  </a>

</div>
    </section>
  );
}
