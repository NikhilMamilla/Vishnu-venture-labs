import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinkClasses = "text-[#222] font-medium text-[0.95rem] border-b-[2.5px] border-transparent hover:text-primary-blue hover:border-primary-blue hover:text-[1rem] transition-all duration-300 font-playfair";
  const dropdownLinkClasses = "block px-[22px] py-[12px] text-[#646262] font-medium text-[0.81rem] border-b-[2.5px] border-transparent hover:text-black hover:border-primary-blue hover:text-[0.95rem] transition-all duration-200 font-playfair";

  return (
    <header className="relative w-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.1)] z-[1000]">
      <nav className="font-playfair relative max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center bg-white h-[72px]">
        <div className="logo-section">
          <img
            src="/images_vvlf/vvlf_logo_fin.jpeg"
            alt="VVLF Logo"
            className="h-[55px] max-h-full max-w-[140px] object-contain block"
          />
        </div>

        {/* Hamburger */}
        <div
          className="flex flex-col gap-[6px] cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <span className="w-[25px] h-[3px] bg-black rounded-[3px] transition-all duration-300"></span>
          <span className="w-[25px] h-[3px] bg-black rounded-[3px] transition-all duration-300"></span>
          <span className="w-[25px] h-[3px] bg-black rounded-[3px] transition-all duration-300"></span>
        </div>

        {/* Nav Links */}
        <ul className={`
          list-none gap-[2.2rem] items-center font-playfair
          ${menuOpen ? 'flex flex-col absolute top-full right-0 w-full bg-white p-[1.2rem] shadow-md' : 'hidden md:flex'}
        `}>
          <li className="group relative">
            <Link to="/" className={navLinkClasses}>HOME</Link>
          </li>

          <li className="group relative">
            <a href="#" className={navLinkClasses}>PROGRAMS ▼</a>
            <ul className="hidden group-hover:block absolute top-[110%] left-0 bg-white shadow-[0_8px_24px_rgba(35,118,214,0.13)] rounded-[10px] min-w-[170px] z-10 border-[1.5px] border-[#e3eaf3] py-2 opacity-0 group-hover:opacity-100 translate-y-[10px] group-hover:translate-y-0 transition-all duration-250">
              <li><a href="#" className={dropdownLinkClasses}>Deep Tech</a></li>
              <li><a href="#" className={dropdownLinkClasses}>HealthTech</a></li>
              <li><a href="#" className={dropdownLinkClasses}>Green Tech</a></li>
            </ul>
          </li>

          <li className="group relative">
            <Link to="/facilities" className={navLinkClasses}>FACILITIES</Link>
          </li>

          <li className="group relative">
            <Link to="/startups" className={navLinkClasses}>STARTUPS</Link>
          </li>

          <li className="group relative">
            <a href="#" className={navLinkClasses}>MENTORS ▼</a>
            <ul className="hidden group-hover:block absolute top-[110%] left-0 bg-white shadow-[0_8px_24px_rgba(35,118,214,0.13)] rounded-[10px] min-w-[170px] z-10 border-[1.5px] border-[#e3eaf3] py-2 opacity-0 group-hover:opacity-100 translate-y-[10px] group-hover:translate-y-0 transition-all duration-250">
              <li><a href="#" className={dropdownLinkClasses}>Our Mentors</a></li>
              <li><a href="#" className={dropdownLinkClasses}>Apply as Mentor</a></li>
            </ul>
          </li>

          <li className="group relative">
            <Link to="/team" className={navLinkClasses}>TEAM ▼</Link>
            <ul className="hidden group-hover:block absolute top-[110%] left-0 bg-white shadow-[0_8px_24px_rgba(35,118,214,0.13)] rounded-[10px] min-w-[170px] z-10 border-[1.5px] border-[#e3eaf3] py-2 opacity-0 group-hover:opacity-100 translate-y-[10px] group-hover:translate-y-0 transition-all duration-250">
              <li><Link to="/team" className={dropdownLinkClasses}>Our Team</Link></li>
              <li><a href="#" className={dropdownLinkClasses}>Join Us</a></li>
            </ul>
          </li>

          <li className="group relative">
            <a href="#" className={navLinkClasses}>EVENTS ▼</a>
            <ul className="hidden group-hover:block absolute top-[110%] left-0 bg-white shadow-[0_8px_24px_rgba(35,118,214,0.13)] rounded-[10px] min-w-[170px] z-10 border-[1.5px] border-[#e3eaf3] py-2 opacity-0 group-hover:opacity-100 translate-y-[10px] group-hover:translate-y-0 transition-all duration-250">
              <li><a href="#" className={dropdownLinkClasses}>Workshops</a></li>
              <li><a href="#" className={dropdownLinkClasses}>Hackathons</a></li>
              <li><a href="#" className={dropdownLinkClasses}>Webinars</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
