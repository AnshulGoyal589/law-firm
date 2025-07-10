import React, { useState } from 'react';
// Import the navigation icons for the slider
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// --- All testimonial data is now in a clean array ---
const testimonialsData = [
  {
    quote: "Shivani Garg from Biz Internaglo has been an incredible legal support partner. Her approach is highly professional, detailed, and startup-friendly... she has delivered with precision. What sets Shivani apart is her patience and clarity in addressing every legal query, making complex legal processes easy to understand.",
    name: 'Shrikanth Karri',
    title: 'Founder, Risqué Boudoir Studios',
    stars: 5,
  },
  {
    quote: "Aditi consistently demonstrated a strong understanding of complex legal matters on contracting templates and was adept at conducting thorough legal template works. Her attention to detail and ability to identify key legal issues were invaluable assets to our team. Moreover, Aditi exhibited excellent communication skills, both written and verbal, allowing her to effectively convey legal concepts and provide sound advice to the team. Her ability to work under pressure and meet tight deadlines was commendable, and she always maintained a positive attitude even in challenging situations.",
    name: 'AnilKumar Jayaprakash',
    title: 'Legal Team Colleague',
    stars: 5,
  },
  {
    quote: "Aditi is multifaceted and works with interest on all types of tasks assigned to her. She was dedicated enough to go the extra mile to use the know-how at her disposal and added value to her work with our team. Aditi has always been the go to person in the team. She never shied away from taking new responsibilities or from extending a helping hand to her teammates. I am sure she is going to add supreme value to any organisation she joins.",
    name: 'Adv. Anahita Arya',
    title: 'Advocate & Team Lead',
    stars: 5,
  },
];

const Testimonial = () => {
  // State to keep track of the currently active testimonial
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = activeIndex === testimonialsData.length - 1;
    const newIndex = isLastSlide ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  const goToPrev = () => {
    const isFirstSlide = activeIndex === 0;
    const newIndex = isFirstSlide ? testimonialsData.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };
  
  const goToSlide = (slideIndex) => {
    setActiveIndex(slideIndex);
  }

  return (
    <section id="testimonials" className="bg-[#f8f9fa] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center mb-12 font-bold uppercase text-[#054039]">
          What Our <span className="text-[#bb8f4d]">Clients Say</span>
        </h2>
        
        {/* The main container for the slider. Overflow-hidden is key. */}
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-lg shadow-xl relative text-center overflow-hidden">
          {/* Decorative Quote Mark */}
          <div className="absolute top-0 left-8 text-9xl text-[#e9ecef] font-serif -translate-y-1/3 z-0">“</div>
          
          {/* Slider Content - this div will move */}
          <div className="relative z-10">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0 h-0'}`}
              >
                {/* We only render the content of the active slide to prevent layout shifts */}
                {index === activeIndex && (
                  <div>
                    <div className="text-2xl text-[#bb8f4d] mb-6">{'★'.repeat(testimonial.stars)}</div>
                    <blockquote className="text-xl leading-relaxed text-[#343a40] mb-8 italic min-h-[150px] md:min-h-[200px] flex items-center justify-center">
                      <p>"{testimonial.quote}"</p>
                    </blockquote>
                    <cite className="block not-italic">
                      <span className="block text-xl font-bold font-serif text-[#054039]">{testimonial.name}</span>
                    </cite>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Slider Navigation Arrows */}
          <button onClick={goToPrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/80 transition-colors z-20">
            <FaChevronLeft className="text-[#054039]" />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/80 transition-colors z-20">
            <FaChevronRight className="text-[#054039]" />
          </button>

        </div>
        
        {/* Dot Indicators for Slider Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, slideIndex) => (
                <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`h-3 w-3 rounded-full transition-colors ${activeIndex === slideIndex ? 'bg-[#054039]' : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                ></button>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;