import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Importing the LinkedIn icon
import shivaniGarg from '../assets/images/shivani-garg.png'; // Importing the founder's image
import shivaniNair from '../assets/images/shivani-nair.png'; // Importing the founder's image
import aditiDeshmukh from '../assets/images/aditi-deshmukh.png'; // Importing the founder's image

// --- Founder Data ---
// Keep all founder information in one place for easy updates.
// You can replace these with your actual details and image URLs.
const founders = [
  {
    name: 'Shivani Garg',
    title: 'Co-Founder',
    quote: "Our commitment is to transform complex legal challenges into clear, actionable strategies for our clients.",
    linkedin: 'https://www.linkedin.com/in/shivani-g-524b2b64/',
    img: shivaniGarg, // Replace with actual image URL
  },
  {
    name: 'Shivani Nair',
    title: 'Co-Founder',
    quote: "Integrity is the cornerstone of our practice. We build lasting relationships based on trust and exceptional results.",
    linkedin: 'https://www.linkedin.com/in/shivani-nairs?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    img: shivaniNair, // Replace with actual image URL
  },
  {
    name: 'Aditi deshmukh',
    title: 'Advisor & Co-Founder',
    quote: "In the world of business, foresight is everything. We provide the legal expertise that empowers our clients to lead.",
    linkedin: 'https://www.linkedin.com/in/aditi-deshmukh-570668190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    img: aditiDeshmukh , // Replace with actual image URL
  },
];


const FoundersSection = () => {
  return (
    <section id="founders" className="bg-[#f8f9fa] py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading - Reusing the style from ContactForm */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#1d2d3d] uppercase">
            Meet Our <span className="text-[#C0A068]">Leadership</span>
          </h2>
          <p className="text-[#6c757d] mt-4">
            Our firm is led by a team of dedicated and experienced partners committed to upholding the highest standards of legal excellence.
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
              
              {/* Founder Name & Title */}
              <h3 className="text-2xl font-bold text-[#1d2d3d] font-serif">{founder.name}</h3>
              <p className="text-[#C0A068] font-semibold tracking-wide uppercase text-sm mb-4">{founder.title}</p>
              
              {/* Founder Quote */}
              <blockquote className="text-[#6c757d] italic text-center border-l-4 border-[#C0A068] pl-4 my-6 flex-grow">
                "{founder.quote}"
              </blockquote>
              
              {/* LinkedIn Link */}
              <a 
                href={founder.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`LinkedIn profile of ${founder.name}`}
                className="mt-4 text-[#1d2d3d] hover:text-[#C0A068] transition-colors duration-300"
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