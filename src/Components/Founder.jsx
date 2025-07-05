import React from 'react';
import shivaniImg from '../assets/images/shivani-garg.png';
import flagUsa from '../assets/images/flag-usa.png';
import flagIndia from '../assets/images/flag-india.png';
import flagCanada from '../assets/images/flag-canada.png';
import flagUk from '../assets/images/flag-uk.png';

const Founder = () => {
  return (
    <section id="founder" className="bg-white pt-12 pb-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className=" h-[50vh] md:w-2/5  lg:pl-[15vw] mb-20 lg:mb-0 ">
          <img src={shivaniImg} alt="Shivani Garg, Co-Founder" className="rounded-lg shadow-2xl lg:w-[25vw] " />
        </div>
        <div className="md:w-3/5 text-center md:text-left">
          <p className="font-semibold tracking-widest text-[#6c757d]">TRUSTED GLOBALLY. ROOTED LOCALLY.</p>
          
          {/* Heading with updated brand colors */}
          <h2 className="font-serif text-6xl my-4 font-bold text-[#054039]">Shivani <span className="text-[#bb8f4d]">Garg</span></h2>
          
          {/* Subheading with updated brand color */}
          <h3 className="text-2xl text-[#054039] font-semibold mb-6">Co-Founder @ Biz Internaglo</h3>
          
          {/* Blockquote with updated border color */}
          <blockquote className="text-xl text-[#6c757d] italic border-l-4 border-[#bb8f4d] pl-6 my-8">
            "Shivani speaks simple, strikes deep, and sparks minds into action."
          </blockquote>
          
          <div className="flex justify-center md:justify-start items-center space-x-6 my-8">
            <img src={flagUsa} alt="USA Flag" className="h-8"/>
            <img src={flagIndia} alt="India Flag" className="h-8"/>
            <img src={flagCanada} alt="Canada Flag" className="h-8"/>
            <img src={flagUk} alt="UK Flag" className="h-8"/>
          </div>
          
          {/* Button with updated brand colors */}
          <a href="https://www.linkedin.com/in/shivani-g-524b2b64/" className="inline-block bg-[#054039] text-white font-bold py-3 px-8 rounded-md hover:bg-[#032a25] transition-all duration-300">
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Founder;