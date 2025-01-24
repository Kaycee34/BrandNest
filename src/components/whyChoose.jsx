"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Users, TrendingUp, BarChart, MessageCircle, Settings } from "lucide-react";

export default function WhyChooseBrandnest() {
  const benefits = [
    {
      title: "Experienced Marketing Professionals",
      icon: <Users size={48} />,
      description: "Our team has years of experience helping brands grow.",
    },
    {
      title: "Proven Track Record of Success",
      icon: <TrendingUp size={48} />,
      description: "We’ve delivered measurable results for numerous clients.",
    },
    {
      title: "Data-Driven Approach",
      icon: <BarChart size={48} />,
      description: "We make informed decisions based on reliable data.",
    },
    {
      title: "Transparent Communication",
      icon: <MessageCircle size={48} />,
      description: "You’ll always know what’s happening with your campaigns.",
    },
    {
      title: "Customized Solutions",
      icon: <Settings size={48} />,
      description: "We tailor strategies to meet your unique business goals.",
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
      id="why-choose-us"
      className="bg-white py-16 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Why Partner with Brandnest?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered animations
              className="flex flex-col items-center p-8 bg-gray-100 shadow-lg rounded-xl w-full max-w-[450px] mx-auto"
            >
              <div className="text-blue-600 mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
