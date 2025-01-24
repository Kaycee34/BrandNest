import { useState } from "react";
import { Menu, X } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-[1000] flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center h-[35px]">
          <img
            src="/brandnestlogo.png"
            alt="Brandnest"
            className="w-[200px] h-auto"
          />
        </div>

        {/* Menu Button */}
        <button
          className="text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={toggleSidebar}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 bg-gray-100">
          <span className="text-black text-lg font-semibold">Menu</span>
          <button
            onClick={closeSidebar}
            className="text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="Close navigation menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col items-start p-6 space-y-4">
          {[
            { href: "#services", label: "Services" },
            { href: "#why-choose-us", label: "Why Choose Us" },
            { href: "#testimonials", label: "Testimonials" },
            { href: "#portfolio", label: "Portfolio" },
            { href: "#contact", label: "Contact" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={closeSidebar}
              className="w-full py-2 px-4 text-black hover:bg-gray-200 rounded-md transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[998] transition-opacity"
          onClick={closeSidebar}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default MobileNav;
