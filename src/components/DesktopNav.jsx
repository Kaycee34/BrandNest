const DesktopNav = () => {
  return (
    <nav className='hidden md:flex justify-between items-center p-4 bg-white fixed top-0 left-0 w-full z-[1000] shadow-md'>
      <div className='flex items-center h-[35px]'>
        <img
          src='/brandnestlogo.png' // Use relative path from public folder
          alt='Brandnest'
          className='w-[200px] h-auto' // Set width to a specific size and height to auto for proportional scaling
        />
      </div>

      {/* Navigation Links */}
      <div className='flex space-x-6'>
        <a href='#home' className='text-black hover:text-gray-700 transition'>
          Home
        </a>
        <a
          href='#services'
          className='text-black hover:text-gray-700 transition'
        >
          Services
        </a>
        <a
          href='#why-choose-us'
          className='text-black hover:text-gray-700 transition'
        >
          Why Choose Us
        </a>
        <a
          href='#testimonials'
          className='text-black hover:text-gray-700 transition'
        >
          Testimonials
        </a>
        <a
          href='#contact'
          className='text-black hover:text-gray-700 transition'
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default DesktopNav
