import React from 'react';
// Import the background image for the bottom section
import heroMeetingBg from '../assets/images/hero-bg.jpg';

const Hero = () => {
  return (
    // The 'home' section is a container for the two parts. No background is needed here.
    <section id="home">
      
      {/* ====== Top Part: Text on a Light Background ====== */}
      <div className="bg-[#f8f9fa] pt-22 pb-6 px-6 text-center">
        {/* Sub-heading: "VISION MAKES US..." */}
        <p className="text-sm font-semibold tracking-[0.2em] text-[#C0A068] uppercase mb-6">
          •• Vision Makes Us Who We Are ••
        </p>
        
        {/* Main Heading: "EXPERT ADVISORY" */}
        <h1 className="font-serif text-3xl md:text-6xl font-bold text-[#1d2d3d] uppercase">
          Expert Advisory
        </h1>
      </div>

      {/* ====== Bottom Part: Text on an Image Background ====== */}
      <div 
        className="relative h-[40vh] md:h-[55vh] flex items-start pt-6 justify-center bg-cover bg-center"
        // The background image is applied here via inline style for best practice
        style={{ backgroundImage: `url(${heroMeetingBg})` }}
      >
        {/* 
          This heading is centered within the div by the flex properties on the parent.
          The inline style adds a subtle shadow to make the text pop, just like in the reference.
        */}
        <h2 
          className="font-serif text-3xl md:text-6xl font-bold text-white/90 uppercase"
          style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)' }}
        >
          Legal Service
        </h2>
      </div>

    </section>
  );
};

export default Hero;