// src/components/Carousel.tsx
import { useEffect, useState } from 'react'
import heroslide1 from '../assets/heroslide1.jpg'
import heroslide2 from '../assets/heroslide2.jpg'
import heroslide3 from '../assets/heroslide3.jpg'
import heroslide4 from '../assets/heroslide4.jpg'
import heroslide5 from '../assets/heroslide5.jpg'

const images = [
  { src: heroslide1, caption: 'Innovate. Inspire. Achieve.' },
  { src: heroslide2, caption: 'Your Vision, Our Mission.' },
  { src: heroslide3, caption: 'Transforming Ideas into Reality.' },
  { src: heroslide4, caption: 'Unleashing Creative Potential.' },
  { src: heroslide5, caption: 'Excellence in Every Pixel.' },
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] bg-black overflow-hidden mt-16 md:mt-0'>
      {' '}
      {/* Added mt-16 for small screens */}
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      {/* Text Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col justify-center items-center text-center px-4 md:px-6 py-8 md:py-12'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4'>
          {images[currentIndex].caption}
        </h1>
        <p className='text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl md:max-w-4xl mb-3 md:mb-5'>
          We believe in delivering the extraordinary. Our team crafts innovative
          solutions to transform your ideas into impactful realities, building
          brands that inspire and connect.
        </p>
        <p className='text-xs md:text-sm lg:text-base text-gray-400 max-w-3xl md:max-w-4xl mb-4 md:mb-6'>
          Let’s take your vision to the next level with designs that captivate
          and strategies that perform.
        </p>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
          <button className='px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white text-sm md:text-base rounded-lg hover:bg-blue-500 transition'>
            Explore More
          </button>
          <button className='px-6 md:px-8 py-2 md:py-3 bg-gray-700 text-white text-sm md:text-base rounded-lg hover:bg-gray-600 transition'>
            Get Started
          </button>
        </div>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className='absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 md:p-3 hover:bg-gray-700 transition'
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        className='absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 md:p-3 hover:bg-gray-700 transition'
      >
        &#9654;
      </button>
      {/* Navigation Dots */}
      <div className='absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3'>
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 transition ${
              index === currentIndex
                ? 'bg-blue-600 border-blue-600 scale-110'
                : 'bg-gray-400 border-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
