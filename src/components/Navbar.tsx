import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isTransparentPage = ['/startups', '/facilities', '/team', '/contact', '/events'].includes(location.pathname);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Base classes
  const baseNavLinkClasses = "font-medium text-[0.95rem] border-b-[2.5px] border-transparent transition-all duration-300 font-playfair";

  // Conditional classes based on page
  const navLinkClasses = isTransparentPage
    ? `${baseNavLinkClasses} text-white/90 hover:text-white hover:border-cyan-400 hover:text-[1rem]`
    : `${baseNavLinkClasses} text-[#222] hover:text-primary-blue hover:border-primary-blue hover:text-[1rem]`;



  return (
    <header className={`w-full z-[1000] transition-all duration-300 ${isTransparentPage ? 'absolute top-0 left-0 bg-transparent' : 'relative bg-white shadow-[0_2px_5px_rgba(0,0,0,0.1)]'}`}>
      <nav className={`font-playfair relative max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center h-[72px] ${isTransparentPage ? 'bg-transparent' : 'bg-white'}`}>
        <div className="logo-section">
          <img
            src="/images_vvlf/vvlf_logo.png"
            alt="VVLF Logo"
            className="h-[55px] max-h-full max-w-[140px] object-contain block"
          />
        </div>

        {/* Hamburger */}
        <div
          className="flex flex-col gap-[6px] cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <span className={`w-[25px] h-[3px] rounded-[3px] transition-all duration-300 ${isTransparentPage ? 'bg-white' : 'bg-black'}`}></span>
          <span className={`w-[25px] h-[3px] rounded-[3px] transition-all duration-300 ${isTransparentPage ? 'bg-white' : 'bg-black'}`}></span>
          <span className={`w-[25px] h-[3px] rounded-[3px] transition-all duration-300 ${isTransparentPage ? 'bg-white' : 'bg-black'}`}></span>
        </div>

        {/* Nav Links */}
        <ul className={`
          list-none gap-[2.2rem] items-center font-playfair
          ${menuOpen ? 'flex flex-col absolute top-full right-0 w-full bg-white p-[1.2rem] shadow-md' : 'hidden md:flex'}
        `}>
          <li className="group relative">
            <Link to="/" className={menuOpen ? navLinkClasses.replace('text-white/90', 'text-[#222]') : navLinkClasses}>HOME</Link>
          </li>

          <li className="group relative">
            <Link to="/facilities" className={menuOpen ? navLinkClasses.replace('text-white/90', 'text-[#222]') : navLinkClasses}>FACILITIES</Link>
          </li>

          <li className="group relative">
            <Link to="/startups" className={menuOpen ? navLinkClasses.replace('text-white/90', 'text-[#222]') : navLinkClasses}>STARTUPS</Link>
          </li>

          <li className="group relative">
            <Link to="/team" className={menuOpen ? navLinkClasses.replace('text-white/90', 'text-[#222]') : navLinkClasses}>OUR TEAM</Link>
          </li>

          <li className="group relative">
            <Link to="/events" className={menuOpen ? navLinkClasses.replace('text-white/90', 'text-[#222]') : navLinkClasses}>EVENTS</Link>
          </li>

          <li className="group relative">
            <Link to="/contact" className={menuOpen ? navLinkClasses.replace('text-white/90', 'text-[#222]') : navLinkClasses}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
