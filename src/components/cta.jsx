'use client'

export default function CallToAction() {
  return (
    <section
      id='cta'
      className='bg-gradient-to-r from-[#04053A] to-[#1B1F51] py-12 md:py-16 text-white'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-6 text-center'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>
          Ready to Grow Your Business?
        </h2>
        <p className='text-base md:text-lg mb-6 md:mb-8'>
          Let’s work together to achieve your business goals with customized
          solutions.
        </p>
        <button className='px-5 py-2 md:px-6 md:py-3 bg-[#F5A623] text-[#04053A] rounded-md text-lg md:text-xl font-semibold shadow-md md:shadow-lg hover:bg-[#FF8F00] transition duration-300'>
          Contact Us Today
        </button>
      </div>
    </section>
  )
}
