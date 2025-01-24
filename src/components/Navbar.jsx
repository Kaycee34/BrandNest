import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  // Define a media query for mobile screens
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust breakpoint as needed

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white shadow-md z-[1000]">

      {/* Navigation - Adjust based on screen size */}
      <div>{isMobile ? <MobileNav /> : <DesktopNav />}</div>
    </header>
  );
};

export default Navbar;
