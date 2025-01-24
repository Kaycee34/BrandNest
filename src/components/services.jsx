"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import {
  Code,
  Palette,
  ShoppingBag,
  Search,
  TrendingUp,
  Globe,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <Code size={48} />,
      description: "Custom websites tailored to your business needs.",
    },
    {
      title: "Graphic Design",
      icon: <Palette size={48} />,
      description: "Eye-catching designs to enhance your brand identity.",
    },
    {
      title: "Digital Marketing",
      icon: <ShoppingBag size={48} />,
      description: "Expand your reach with innovative online marketing.",
    },
    {
      title: "SEO Optimization",
      icon: <Search size={48} />,
      description: "Boost your search engine rankings effectively.",
    },
    {
      title: "Social Media Management",
      icon: <TrendingUp size={48} />,
      description: "Engage audiences and grow your social presence.",
    },
    {
      title: "Global Branding",
      icon: <Globe size={48} />,
      description: "Develop a cohesive brand that resonates worldwide.",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <section
      id="services"
      className="bg-gray-100 py-16 scroll-mt-16" // Adjust scroll alignment
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          How We Can Help You Achieve Your Marketing Goals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Staggered animations
              className="flex flex-col items-center p-8 bg-white shadow-lg rounded-xl w-full max-w-[450px] mx-auto"
            >
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
