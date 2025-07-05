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
            <blockquote className="text-xl lg:text-2xl leading-relaxed text-[#343a40] mb-8 italic">
              "Working with Biz Internaglo has been an absolute game-changer... Their team has a knack for turning legal complexities into easy-to-understand solutions. From contracts to influencing itself, they've got it covered."
            </blockquote>
            <cite className="block not-italic">
              {/* Citation name updated with new brand color */}
              <span className="block text-xl font-bold font-serif text-[#054039]">Mr. K.</span>
              <span className="text-[#6c757d]">Lifestyle & Fashion Influencer</span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;