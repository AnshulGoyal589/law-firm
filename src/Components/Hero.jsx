import React from 'react';
// Import the background image for the bottom section
import heroMeetingBg from '../assets/images/hero-bg.jpg';

const Hero = () => {
  return (
    // The 'home' section container
    <section id="home">
      
      {/* ====== Top Part: Text on a Light Background with updated brand colors ====== */}
      <div className="bg-[#f8f9fa] pt-28 pb-6 px-6 text-center">
        {/* Sub-heading with updated brand color */}
        <p className="text-sm font-semibold tracking-[0.2em] text-[#bb8f4d] uppercase mb-6">
          •• Vision Makes Us Who We Are ••
        </p>
        
        {/* Main Heading with updated brand color */}
        <h1 className="font-serif text-3xl md:text-6xl font-bold text-[#054039] uppercase">
          Your Boutique Legal Partners
        </h1>
      </div>

      {/* ====== Bottom Part: Text on an Image Background ====== */}
      <div 
        className="relative h-[40vh] md:h-[55vh] flex items-start pt-6 justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroMeetingBg})` }}
      >
        {/* This text remains white for best contrast against the image */}
        {/* <h2 
          className="font-serif text-3xl md:text-6xl font-bold text-white/90 uppercase"
          style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)' }}
        >
          Legal Service
        </h2> */}
      </div>

    </section>
  );
};

export default Hero;