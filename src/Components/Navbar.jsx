import React, { useState } from 'react';
import logo from '../assets/images/logo.png'; // Make sure this path is correct
import { FaFacebookF, FaTwitter, FaInstagram , FaMailBulk , FaBehance, FaPhone, FaClock, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const calendlyUrl = "https://calendly.com/bizinternaglo";
const openCalendly = (e) => {
  e.preventDefault();
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: calendlyUrl });
  } else {
    window.open(calendlyUrl, "_blank"); // fallback (opens in new tab)
  }
  return false;
};


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', hasDropdown: true },
    // { name: 'Why Us', href: '#benefits', hasDropdown: false },
    { name: 'Services', href: '#solutions', hasDropdown: false },
    // { name: 'Founder', href: '#founder', hasDropdown: false },
    { name: 'Testimonials', href: '#testimonials', hasDropdown: false },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        
        {/* ====== Top Bar - With updated brand colors ====== */}
        {/* <div className="bg-[#f8f9fa] text-[#343a40] text-sm hidden lg:block">
          <div className="container mx-auto px-4 lg:px-6 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaClock className="text-[#bb8f4d]" />
                <span>Monday to Friday - 09:00 - 18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-[#bb8f4d]" />
                <span>Call now: +1 (234) 567-890</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/bizinternaglo?igsh=MTRxdTJmODlrNWhtNQ==" className="text-[#343a40] hover:text-[#bb8f4d] transition-colors"><FaInstagram /></a>
              <a href="mailto:bizinternaglo@gmail.com" className="text-[#343a40] hover:text-[#bb8f4d] transition-colors"><FaMailBulk /></a>
            </div>
          </div>
        </div> */}

        {/* ====== Main Navigation Bar - With updated brand colors ====== */}
        <div className="container mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <img src={logo} alt="Biz Internaglo Logo" className="h-10 lg:h-12" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-semibold uppercase tracking-wider text-[#054039] hover:text-[#bb8f4d] transition-colors flex items-center space-x-1">
                <span>{link.name}</span>
                {link.hasDropdown && <FaChevronDown size={12} />}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button
  onClick={openCalendly}
  className="hidden lg:inline-block bg-[#bb8f4d] text-white font-bold py-3 px-6 rounded-md hover:bg-[#a27c42] transition-all duration-300"
>
  Free Evaluation
</button>

          {/* Mobile Menu Button (Hamburger) */}
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-2xl text-[#054039]">
            <FaBars />
          </button>
        </div>
      </header>

      {/* ====== Mobile Menu (Overlay) - With updated brand colors ====== */}
      <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Biz Internaglo Logo" className="h-10" />
          </a>
          <button onClick={() => setIsMenuOpen(false)} className="text-3xl text-[#054039]">
            <FaTimes />
          </button>
        </div>
        
        {/* Mobile Menu Navigation Links */}
        <nav className="flex-grow flex flex-col items-center justify-center space-y-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold uppercase tracking-wider text-[#054039] hover:text-[#bb8f4d] transition-colors flex items-center space-x-2">
                <span>{link.name}</span>
                {link.hasDropdown && <FaChevronDown size={16} />}
              </a>
            ))}
             <button
  onClick={(e) => { setIsMenuOpen(false); openCalendly(e); }}
  className="mt-6 inline-block bg-[#bb8f4d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#a27c42] transition-all duration-300"
>
  Free Evaluation
</button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;