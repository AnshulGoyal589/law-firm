import React, { useState } from 'react';
import logo from '../assets/images/logo.png'; // Make sure this path is correct
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaPhone, FaClock, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // No changes to your navigation data logic
  const navLinks = [
    { name: 'Home', href: '#home', hasDropdown: true },
    { name: 'Why Us', href: '#benefits', hasDropdown: false },
    { name: 'Services', href: '#solutions', hasDropdown: false },
    { name: 'Founder', href: '#founder', hasDropdown: false },
    { name: 'Testimonials', href: '#testimonials', hasDropdown: false },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        
        {/* ====== Top Bar - Hidden on mobile, visible on laptop (lg) and up ====== */}
        <div className="bg-[#f8f9fa] text-[#343a40] text-sm hidden lg:block">
          {/* Using responsive padding for better spacing on different screen sizes */}
          <div className="container mx-auto px-4 lg:px-6 py-2 flex justify-between items-center">
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
            <div className="flex items-center space-x-4">
              <a href="#" className="text-[#343a40] hover:text-[#C0A068] transition-colors"><FaFacebookF /></a>
              <a href="#" className="text-[#343a40] hover:text-[#C0A068] transition-colors"><FaTwitter /></a>
              <a href="#" className="text-[#343a40] hover:text-[#C0A068] transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="text-[#343a40] hover:text-[#C0A068] transition-colors"><FaBehance /></a>
            </div>
          </div>
        </div>

        {/* ====== Main Navigation Bar ====== */}
        <div className="container mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="#home">
            {/* Slightly smaller logo on mobile, larger on desktop for better proportions */}
            <img src={logo} alt="Biz Internaglo Logo" className="h-10 lg:h-12" />
          </a>

          {/* Desktop Navigation Links - Hidden on mobile, flex on laptop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-semibold uppercase tracking-wider text-[#1d2d3d] hover:text-[#C0A068] transition-colors flex items-center space-x-1">
                <span>{link.name}</span>
                {link.hasDropdown && <FaChevronDown size={12} />}
              </a>
            ))}
          </nav>

          {/* CTA Button - Hidden on mobile, visible on laptop */}
          <a href="#footer" className="hidden lg:inline-block bg-[#C0A068] text-white font-bold py-3 px-6 rounded-md hover:bg-[#a88a59] transition-all duration-300">
            Free Evaluation
          </a>

          {/* Mobile Menu Button (Hamburger) - Visible on mobile, hidden on laptop */}
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-2xl text-[#1d2d3d]">
            <FaBars />
          </button>
        </div>
      </header>

      {/* ====== Mobile Menu (Overlay) - Logic remains unchanged ====== */}
      {/* IMPROVEMENT: The parent is now a flex container for better vertical alignment */}
      <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Biz Internaglo Logo" className="h-10" />
          </a>
          <button onClick={() => setIsMenuOpen(false)} className="text-3xl text-[#1d2d3d]">
            <FaTimes />
          </button>
        </div>
        
        {/* Mobile Menu Navigation Links */}
        {/* IMPROVEMENT: Uses flex-grow to take remaining space and centers content perfectly without negative margins */}
        <nav className="flex-grow flex flex-col items-center justify-center space-y-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold uppercase tracking-wider text-[#1d2d3d] hover:text-[#C0A068] transition-colors flex items-center space-x-2">
                <span>{link.name}</span>
                {link.hasDropdown && <FaChevronDown size={16} />}
              </a>
            ))}
             <a href="#footer" onClick={() => setIsMenuOpen(false)} className="mt-6 inline-block bg-[#C0A068] text-white font-bold py-3 px-8 rounded-md hover:bg-[#a88a59] transition-all duration-300">
                Free Evaluation
             </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;