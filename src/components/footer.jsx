"use client";

export default function Footer() {
  return (
    <footer className="bg-[#04053A] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-start">
        {/* About Brandnest Section - Left */}
        <div className="max-w-xs">
          <p className="text-sm mt-2">
            At Brandnest, we provide innovative solutions that elevate businesses to new heights. 
            Our dedicated team delivers top-notch strategies tailored to your specific needs, 
            helping you grow and thrive in the digital landscape. Let’s achieve success together.
          </p>
        </div>

        {/* Navigation Links - Right */}
        <div className="flex space-x-10">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white hover:text-[#F5A623] transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-[#F5A623] transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white hover:text-[#F5A623] transition duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-[#F5A623] transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#blog" className="text-white hover:text-[#F5A623] transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white hover:text-[#F5A623] transition duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#terms" className="text-white hover:text-[#F5A623] transition duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-white hover:text-[#F5A623] transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-400 text-center mt-6">
        <p>&copy; 2025 Brandnest. Designed with passion and purpose.</p>
      </div>
    </footer>
  );
}
