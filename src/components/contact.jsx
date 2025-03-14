'use client'

export default function ContactInformation() {
  return (
    <section
      id='contact'
      className='bg-[#F5F5F5] py-12 md:py-16 text-[#04053A] scroll-mt-16'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-6 text-center'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>
          Get in Touch with Us
        </h2>
        <p className='text-base md:text-lg mb-6 md:mb-8'>
          We’re here to answer your questions and help you get started.
        </p>

        <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-10 md:mb-12'>
          {' '}
          {/* Adjusted layout and gap */}
          <div className='flex flex-col items-center'>
            <h3 className='text-lg md:text-2xl font-semibold mb-2'>Phone</h3>{' '}
            {/* Adjusted heading size */}
            <p className='text-sm md:text-lg text-gray-700'>
              +123-456-7890
            </p>{' '}
            {/* Adjusted text size */}
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-lg md:text-2xl font-semibold mb-2'>Email</h3>{' '}
            {/* Adjusted heading size */}
            <p className='text-sm md:text-lg text-gray-700'>
              contact@yourbusiness.com
            </p>{' '}
            {/* Adjusted text size */}
          </div>
        </div>

        <div className='mt-8 md:mt-12'>
          {' '}
          {/* Adjusted margin */}
          <h3 className='text-lg md:text-2xl font-semibold mb-4'>
            Or Fill Out Our Contact Form
          </h3>{' '}
          {/* Adjusted heading size */}
          <form className='max-w-md mx-auto flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='p-3 md:p-4 border border-gray-300 rounded-md'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='p-3 md:p-4 border border-gray-300 rounded-md'
            />
            <textarea
              placeholder='Your Message'
              className='p-3 md:p-4 border border-gray-300 rounded-md h-32'
            ></textarea>
            <button
              type='submit'
              className='px-5 py-2 md:px-6 md:py-3 bg-[#04053A] text-white rounded-md text-lg md:text-xl font-semibold shadow-md md:shadow-lg hover:bg-[#1B1F51] transition duration-300'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
