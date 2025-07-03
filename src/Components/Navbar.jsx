// import React from 'react';
import React , { useState } from 'react';
import logo from '../assets/images/logo.png'; // Make sure this path is correct
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaPhone, FaClock, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', hasDropdown: true },
    { name: 'Why Us', href: '#benefits', hasDropdown: false },
    { name: 'Services', href: '#solutions', hasDropdown: false },
    { name: 'Founder', href: '#founder', hasDropdown: false },
    { name: 'Testimonials', href: '#testimonials', hasDropdown: false },
  ];

  return (
    <>
      {/* The entire header is sticky to stay at the top */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        
        {/* ====== Top Bar ====== */}
        <div className="bg-[#f8f9fa] text-[#333] text-sm hidden lg:block">
          <div className="container mx-auto px-6 py-2 flex justify-between items-center">
            {/* Left side: Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaClock className="text-[#C0A068]" />
                <span>Monday to Friday - 09:00 - 18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-[#C0A068]" />
                <span>Call now: +1 (234) 567-890</span>
              </div>
            </div>
            {/* Right side: Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-[#333] hover:text-[#C0A068] transition-colors"><FaFacebookF /></a>
              <a href="#" className="text-[#333] hover:text-[#C0A068] transition-colors"><FaTwitter /></a>
              <a href="#" className="text-[#333] hover:text-[#C0A068] transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="text-[#333] hover:text-[#C0A068] transition-colors"><FaBehance /></a>
            </div>
          </div>
        </div>

        {/* ====== Main Navigation Bar ====== */}
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#home">
            <img src={logo} alt="Biz Internaglo Logo" className="h-12" />
            
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-semibold uppercase tracking-wider text-[#1a1a1a] hover:text-[#C0A068] transition-colors flex items-center space-x-1">
                <span>{link.name}</span>
                {link.hasDropdown && <FaChevronDown size={12} />}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <a href="#footer" className="hidden lg:inline-block bg-[#C0A068] text-white font-bold py-3 px-6 rounded-md hover:bg-[#a88a59] transition-all duration-300">
            Free Evaluation
          </a>

          {/* Mobile Menu Button (Hamburger) */}
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-2xl text-[#1a1a1a]">
            <FaBars />
          </button>
        </div>
      </header>

      {/* ====== Mobile Menu (Overlay) ====== */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Biz Internaglo Logo" className="h-12" />
          </a>
          <button onClick={() => setIsMenuOpen(false)} className="text-3xl text-[#1a1a1a]">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold uppercase tracking-wider text-[#1a1a1a] hover:text-[#C0A068] transition-colors flex items-center space-x-2">
                <span>{link.name}</span>
                {link.hasDropdown && <FaChevronDown size={16} />}
              </a>
            ))}
             <a href="#footer" onClick={() => setIsMenuOpen(false)} className="mt-4 inline-block bg-[#C0A068] text-white font-bold py-3 px-8 rounded-md hover:bg-[#a88a59] transition-all duration-300">
                Free Evaluation
             </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;