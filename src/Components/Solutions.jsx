import React from 'react';
// Import the new, more professional icons
import { FaShieldAlt, FaBrain, FaBullhorn, FaCheckCircle } from 'react-icons/fa';

// --- New Data Structure: Focused on Target Audiences ---
const solutionsData = [
  {
    icon: <FaShieldAlt size={40} />,
    title: 'For FinTech Pioneers',
    services: [
      'Regulatory Compliance & Licensing',
      'Data Privacy & Security Policies',
      'Investor & Funding Agreements',
      'Payment Processing Frameworks',
    ],
  },
  {
    icon: <FaBrain size={40} />,
    title: 'For AI Innovators',
    services: [
      'Intellectual Property Protection',
      'Data Usage & Ethics Guidelines',
      'Technology Licensing Agreements',
      'Liability & Risk Mitigation',
    ],
  },
  {
    icon: <FaBullhorn size={40} />,
    title: 'For Influencers & Creators',
    services: [
      'Brand & Sponsorship Contracts',
      'Content Licensing & IP Rights',
      'FTC Disclosure Compliance',
      'Business Entity Formation (LLC)',
    ],
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="bg-white py-24">
      <div className="container mx-auto px-6 text-center">
        {/* The heading is updated to reflect the specialized approach */}
        <h2 className="text-4xl font-bold text-[#054039] uppercase">
          Tailored Solutions for <span className="text-[#bb8f4d]">Modern Innovators</span>
        </h2>
        <p className="text-lg text-[#6c757d] mt-4 mb-16 max-w-3xl mx-auto">
          We provide specialized legal guidance for the unique challenges faced by today's fastest-growing sectors.
        </p>

        {/* --- New 3-Column Layout for Targeted Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutionsData.map((solution) => (
            <div 
              key={solution.title} 
              // Added flex-col to allow for better vertical spacing and button placement
              className="bg-[#f8f9fa] p-8 rounded-lg transform hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="text-[#bb8f4d] mx-auto mb-6">{solution.icon}</div>
              
              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-[#054039] mb-6">{solution.title}</h3>
              
              {/* Service List */}
              <ul className="space-y-3 text-left mb-8">
                {solution.services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-[#6c757d]">{service}</span>
                  </li>
                ))}
              </ul>

              {/* Spacer to push button to the bottom */}
              <div className="flex-grow"></div> 

              {/* Action Button */}
              <a 
                href="#contact" 
                className="mt-auto inline-block border-2 border-[#bb8f4d] text-[#054039] font-bold py-2 px-6 rounded-md hover:bg-[#bb8f4d] hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;