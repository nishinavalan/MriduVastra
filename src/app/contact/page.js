export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-white/70 backdrop-blur rounded-3xl shadow-md p-10 sm:p-14 space-y-14">

        {/* HEADER */}
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold text-[#054B43]">
            Contact Us
          </h1>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We’re happy to help you with orders, sizing guidance,
            delivery timelines, or anything related to our brand.
          </p>
        </div>

        {/* WHATSAPP CTA */}
        <div className="flex justify-center">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-12 py-5
                       rounded-2xl text-lg font-semibold text-white
                       bg-linear-to-r from-[#054B43] to-[#0B6B5A]
                       shadow-lg hover:scale-[1.02] hover:opacity-95 transition"
          >
            💬 Chat with us on WhatsApp
          </a>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-linear-to-r from-transparent via-[#054B43]/30 to-transparent" />

        {/* CONTACT INFO CARDS */}
        <div className="grid gap-6 sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-[#054B43]/10 bg-white p-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              Email
            </p>
            <p className="text-lg font-medium text-[#054B43]">
              mriduvastra@gmail.com
            </p>
          </div>

          <div className="rounded-2xl border border-[#054B43]/10 bg-white p-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              Instagram
            </p>
            <p className="text-lg font-medium text-[#054B43]">
              @mriduvastra
            </p>
          </div>
        </div>

        {/* BUSINESS INFO */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Business Information
          </p>

          <div className="rounded-2xl bg-[#F6FBF9] p-6 text-lg text-gray-700 space-y-2">
            <p>
              <span className="font-medium text-[#054B43]">Brand:</span>{" "}
              MriduVastra
            </p>
            <p>
              <span className="font-medium text-[#054B43]">Parent Brand:</span>{" "}
              Nutishvara Essentials
            </p>
            <p>
              <span className="font-medium text-[#054B43]">Country:</span>{" "}
              India
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-[#054B43]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How do I place an order?",
                a: "Select the size on the product page and choose Buy on WhatsApp or Pay Securely via UPI or cards."
              },
              {
                q: "How long does delivery take?",
                a: "Orders are usually processed and shipped within 2–4 working days."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept UPI and card payments via Razorpay, along with WhatsApp-assisted orders."
              },
              {
                q: "Can I return or exchange a product?",
                a: "Please reach out to us on WhatsApp and we’ll be happy to assist you."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#054B43]/10 bg-white p-7"
              >
                <p className="text-xl font-semibold text-[#054B43]">
                  {item.q}
                </p>
                <p className="text-lg text-gray-700 mt-3 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER NOTE */}
        <p className="text-center text-sm tracking-wide text-gray-400 pt-10">
          Handcrafted babywear • Yogawear • Made with care in India
        </p>
      </div>
    </section>
  );
}
