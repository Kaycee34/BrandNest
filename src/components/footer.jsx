'use client'

export default function Footer() {
  return (
    <footer className='bg-[#04053A] text-white py-8'>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <div className='flex flex-col md:flex-row justify-between items-start'>
          <div className='max-w-xs mb-6 md:mb-0'>
            <p className='text-sm mt-2'>
              At Brandnest, we provide innovative solutions that elevate
              businesses to new heights. Our dedicated team delivers top-notch
              strategies tailored to your specific needs, helping you grow and
              thrive in the digital landscape. Let’s achieve success together.
            </p>
          </div>

          <div className='flex flex-wrap justify-center md:justify-start gap-8 md:gap-10'>
            <div>
              <h4 className='text-lg font-semibold mb-3'>Quick Links</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#home'
                    className='text-white hover:text-[#F5A623] transition duration-300'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#services'
                    className='text-white hover:text-[#F5A623] transition duration-300'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='#testimonials'
                    className='text-white hover:text-[#F5A623] transition duration-300'
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className='text-white hover:text-[#F5A623] transition duration-300'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='text-sm text-gray-400 text-center mt-6'>
          <p>&copy; 2025 Brandnest. Designed with passion and purpose.</p>
        </div>
      </div>
    </footer>
  )
}
