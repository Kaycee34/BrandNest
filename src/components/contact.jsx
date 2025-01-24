"use client";

export default function ContactInformation() {
  return (
    <section
      id="contact"
      className="bg-[#F5F5F5] py-16 text-[#04053A] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in Touch with Us
        </h2>
        <p className="text-lg mb-8">
          We’re here to answer your questions and help you get started.
        </p>

        <div className="flex justify-center gap-16">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">Phone</h3>
            <p className="text-lg text-gray-700">+123-456-7890</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <p className="text-lg text-gray-700">contact@yourbusiness.com</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Or Fill Out Our Contact Form</h3>
          <form className="max-w-md mx-auto flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="p-4 border border-gray-300 rounded-md h-32"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-[#04053A] text-white rounded-md text-xl font-semibold shadow-lg hover:bg-[#1B1F51] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
