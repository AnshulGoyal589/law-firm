import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-[#f8f9fa] py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1d2d3d] uppercase">
            Request a <span className="text-[#C0A068]">Free</span> Consultation
          </h2>
          <p className="text-[#6c757d] mt-4">
            Have a question or need to discuss a case? Fill out the form below and one of our legal experts will get back to you promptly.
          </p>
        </div>

        {/* Form */}
        <form className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Full Name */}
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Your Full Name" 
                className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-[#1d2d3d] focus:outline-none focus:border-[#C0A068] transition-colors" 
              />
            </div>
            {/* Email Address */}
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-[#1d2d3d] focus:outline-none focus:border-[#C0A068] transition-colors" 
              />
            </div>
            {/* Phone Number */}
            <div className="mb-4">
              <input 
                type="tel" 
                placeholder="Your Phone Number" 
                className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-[#1d2d3d] focus:outline-none focus:border-[#C0A068] transition-colors" 
              />
            </div>
             {/* Subject */}
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Subject of Inquiry" 
                className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-[#1d2d3d] focus:outline-none focus:border-[#C0A068] transition-colors" 
              />
            </div>
            {/* Message */}
            <div className="md:col-span-2 mb-4">
               <textarea 
                placeholder="Tell us about your case..." 
                rows="4"
                className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-[#1d2d3d] focus:outline-none focus:border-[#C0A068] transition-colors resize-none"
              ></textarea>
            </div>
          </div>
           {/* Submit Button */}
          <div className="text-center mt-8">
            <button 
              type="submit" 
              className="bg-[#C0A068] text-white font-bold py-4 px-12 rounded-md hover:bg-[#a88a59] transition-all duration-300 uppercase tracking-wider"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;