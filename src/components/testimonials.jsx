"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react"; // Quote Icon from Lucide React
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      quote: "Brandnest helped us triple our online engagement within three months!",
      title: "Marketing Manager at XYZ Corp",
    },
    {
      name: "John Smith",
      quote: "Their team is professional and delivers exceptional results every time.",
      title: "CEO of Alpha Enterprises",
    },
    {
      name: "Sarah Johnson",
      quote: "We saw a 40% increase in conversions after working with Brandnest!",
      title: "E-commerce Founder",
    },
    {
      name: "Michael Brown",
      quote: "Their customized solutions perfectly fit our business goals.",
      title: "Operations Head, Beta Tech",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // AOS initialization
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="bg-[#04053A] py-16 text-white scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </h2>
        
        {/* Large screens: Testimonial boxes with arrow navigation */}
        <div className="hidden lg:flex gap-8 pb-4 relative">
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer"
            onClick={prevTestimonial}
          >
            &#9664; {/* Left arrow */}
          </div>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[350px] max-w-[500px] bg-[#1B1F51] p-8 rounded-xl shadow-lg relative h-[500px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Quote className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-4xl" />
              <p className="text-lg mb-6 mt-12">{testimonial.quote}</p> {/* Added margin-top */}
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
            </div>
          ))}
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl cursor-pointer"
            onClick={nextTestimonial}
          >
            &#9654; {/* Right arrow */}
          </div>
        </div>

        {/* Small screens: Button-controlled carousel with Quote icon */}
        <div className="lg:hidden">
          <div className="bg-[#1B1F51] p-8 rounded-xl shadow-lg text-center relative">
            <Quote className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-4xl" />
            <p className="text-lg mb-6 mt-12">
              {testimonials[currentIndex].quote}
            </p> {/* Added margin-top */}
            <h3 className="text-xl font-semibold">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-gray-400">
              {testimonials[currentIndex].title}
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 bg-white text-[#04053A] rounded-md shadow"
            >
              &#9664; {/* Left arrow */}
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-white text-[#04053A] rounded-md shadow"
            >
              &#9654; {/* Right arrow */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
