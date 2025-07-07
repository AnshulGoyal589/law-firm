import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Importing the LinkedIn icon
import shivaniGarg from '../assets/images/shivani-garg.png';
import shivaniNair from '../assets/images/shivani-nair.png';
import aditiDeshmukh from '../assets/images/aditi-deshmukh.png';

// --- Founder Data (Quote property removed) ---
const founders = [
  {
    name: 'Shivani Garg',
    title: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/shivani-g-524b2b64/',
    img: shivaniGarg,
  },
  {
    name: 'Shivani Nair',
    title: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/shivani-nairs?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    img: shivaniNair,
  },
  {
    name: 'Aditi Deshmukh',
    title: 'Advisor & Co-Founder',
    linkedin: 'https://www.linkedin.com/in/aditi-deshmukh-570668190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    img: aditiDeshmukh,
  },
];


const FoundersSection = () => {
  return (
    <section id="founders" className="bg-[#f8f9fa] py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading with updated brand colors */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#054039] uppercase">
            Meet Our <span className="text-[#bb8f4d]">Leadership</span>
          </h2>
          <p className="text-[#6c757d] mt-4">
           Our firm is led by a team of dedicated partners who bring a fresh, innovative perspective to upholding the highest standards of legal excellence.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center transition-transform transform hover:-translate-y-2"
            >
              {/* Founder Image */}
              <img
                src={founder.img}
                alt={`Portrait of ${founder.name}`}
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-gray-200"
              />
              
              {/* Founder Name & Title with updated brand colors */}
              <h3 className="text-2xl font-bold text-[#054039] font-serif">{founder.name}</h3>
              <p className="text-[#bb8f4d] font-semibold tracking-wide uppercase text-sm mb-4">{founder.title}</p>
              
              {/* Founder Quote section has been removed */}
              
              {/* Spacer to ensure consistent card height */}
              <div className="flex-grow"></div>

              {/* LinkedIn Link with updated brand colors */}
              <a 
                href={founder.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`LinkedIn profile of ${founder.name}`}
                className="mt-6 text-[#054039] hover:text-[#bb8f4d] transition-colors duration-300"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;