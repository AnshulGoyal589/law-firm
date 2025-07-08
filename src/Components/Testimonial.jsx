import React from 'react';

const Testimonial = () => {
  return (
    <section id="testimonials" className="bg-[#f8f9fa] py-20">
      <div className="container mx-auto px-6">
        {/* Heading updated with new brand colors */}
        <h2 className="text-4xl text-center mb-12 font-bold uppercase text-[#054039]">What Our <span className="text-[#bb8f4d]">Clients Say</span></h2>
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-lg shadow-xl relative text-center">
          <div className="absolute top-0 left-8 text-9xl text-[#e9ecef] font-serif -translate-y-1/3 z-0">“</div>
          <div className="relative z-10">
            {/* Star rating updated with new brand color */}
            <div className="text-2xl text-[#bb8f4d] mb-6">★★★★★</div>
            <blockquote className="text-sm lg:text-xl leading-relaxed text-[#343a40] mb-8 italic">
              Shivani Garg from Biz Internal has been an incredible legal support partner for Risqué Boudoir Studios. her approach is highly professional, detailed, and startup-friendly. Right from consulting us on Legal Safety Protocols to ensure risk-free operations, to designing comprehensive NDAs for both clients service providers, and MSAs with a structured action plan for timely documentation, she has delivered with precision. What sets Shivani apart is her patience and clarity in addressing every legal query, making complex legal processes easy to understand. her work gives immense confidence to any business wanting to safeguard its operations and reputation. I would strongly recommend Shivani and Biz Internal to any startup or business looking to establish sound legal foundations and risk-free, compliant operations from day one. Her proactive approach ensures no loose ends and allows founders to focus on growth with peace of mind.  
            </blockquote>
            <cite className="block not-italic">
              {/* Citation name updated with new brand color */}
              <span className="block text-xl font-bold font-serif text-[#054039]">Shrikanth Karri</span>
              <span className="text-[#6c757d]">Studio Space for Commercial Photography & Production Support</span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;