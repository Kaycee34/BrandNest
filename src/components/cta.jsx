"use client";

export default function CallToAction() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-r from-[#04053A] to-[#1B1F51] py-16 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-lg mb-8">
          Let’s work together to achieve your business goals with customized
          solutions.
        </p>
        <button className="px-6 py-3 bg-[#F5A623] text-[#04053A] rounded-md text-xl font-semibold shadow-lg hover:bg-[#FF8F00] transition duration-300">
          Contact Us Today
        </button>
      </div>
    </section>
  );
}
