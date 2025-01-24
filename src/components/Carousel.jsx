// src/components/Carousel.tsx
import { useState, useEffect } from "react";
import heroslide1 from "../assets/heroslide1.jpg";
import heroslide2 from "../assets/heroslide2.jpg";
import heroslide3 from "../assets/heroslide3.jpg";
import heroslide4 from "../assets/heroslide4.jpg";
import heroslide5 from "../assets/heroslide5.jpg";

const images = [
  { src: heroslide1, caption: "Innovate. Inspire. Achieve." },
  { src: heroslide2, caption: "Your Vision, Our Mission." },
  { src: heroslide3, caption: "Transforming Ideas into Reality." },
  { src: heroslide4, caption: "Unleashing Creative Potential." },
  { src: heroslide5, caption: "Excellence in Every Pixel." },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[750px] bg-black overflow-hidden">
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          {images[currentIndex].caption}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-4xl">
          We believe in delivering the extraordinary. Our team crafts innovative
          solutions to transform your ideas into impactful realities, building
          brands that inspire and connect.
        </p>
        <p className="mt-2 text-base md:text-lg text-gray-400 max-w-4xl">
          Let’s take your vision to the next level with designs that captivate
          and strategies that perform.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-500 transition">
            Explore More
          </button>
          <button className="px-8 py-3 bg-gray-700 text-white text-lg rounded-lg hover:bg-gray-600 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 transition"
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 transition"
      >
        &#9654;
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full border-2 transition ${
              index === currentIndex
                ? "bg-blue-600 border-blue-600 scale-110"
                : "bg-gray-400 border-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
