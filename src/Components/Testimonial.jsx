import React from 'react';

const Testimonial = () => {
  return (
    <section id="testimonials" className="bg-[#f8f9fa] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center mb-12 font-bold uppercase text-[#1d2d3d]">What Our <span className="text-[#C0A068]">Clients Say</span></h2>
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-lg shadow-xl relative text-center">
          <div className="absolute top-0 left-8 text-9xl text-[#e9ecef] font-serif -translate-y-1/3 z-0">“</div>
          <div className="relative z-10">
            <div className="text-2xl text-[#C0A068] mb-6">★★★★★</div>
            <blockquote className="text-xl lg:text-2xl leading-relaxed text-[#343a40] mb-8 italic">
              "Working with BizBase Legal has been an absolute game-changer... Their team has a knack for turning legal complexities into easy-to-understand solutions. From contracts to influencing itself, they've got it covered."
            </blockquote>
            <cite className="block not-italic">
              <span className="block text-xl font-bold font-serif text-[#1d2d3d]">Mr. K.</span>
              <span className="text-[#6c757d]">Lifestyle & Fashion Influencer</span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;