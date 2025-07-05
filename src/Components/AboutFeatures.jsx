import React from 'react';
// Import the icons for the feature grid
import { FaChartLine, FaUserTie, FaBullseye, FaLightbulb } from 'react-icons/fa';

// The data for the features, focused on your core values
const featuresData = [
  {
    icon: <FaChartLine size={40} />,
    title: 'Business-Centric Growth',
    text: 'We provide legal strategies that not only ensure compliance but are designed to protect your assets and support sustainable ROI.'
  },
  {
    icon: <FaUserTie size={40} />,
    title: 'Our Mission',
    text: 'To deliver strategic, high-impact legal consultancy that empowers startups and established companies to navigate their growth with confidence.'
  },
  {
    icon: <FaBullseye size={40} />,
    title: 'Our Approach',
    text: 'Our sessions are concise and potent. We believe in delivering maximum value and lasting impact in a time-efficient manner for busy founders.'
  },
  {
    icon: <FaLightbulb size={40} />,
    title: 'Modern Solutions',
    text: 'Our passionate team thrives on tackling the evolving legal challenges of the digital age, providing innovative strategies for modern businesses.'
  }
];

const AboutFeatures = () => {
  return (
    // The light gray background provides excellent contrast for the new brand colors
    <section id="about-features" className="bg-[#f8f9fa] py-24 px-4 sm:px-8 lg:px-12">
      <div className="container mx-auto px-6">

        {/* Section Heading with updated colors */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#054039] uppercase">
            Why Partner <span className="text-[#bb8f4d]">With Us?</span>
          </h2>
          <p className="text-[#6c757d] mt-4">
            Our firm is built on four core principles that guide every client engagement and ensure exceptional outcomes.
          </p>
        </div>

        {/* Feature Grid with updated colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {featuresData.map((feature, index) => (
            <div key={index} className="text-center flex flex-col items-center p-4">
              {/* Gold icon color */}
              <div className="text-[#bb8f4d] mb-4">
                {feature.icon}
              </div>
              {/* Deep green title color */}
              <h3 className="text-xl font-bold text-[#054039] tracking-wider uppercase mb-3">
                {feature.title}
              </h3>
              <p className="text-[#6c757d]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AboutFeatures;