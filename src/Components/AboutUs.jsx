import React from 'react';
// Import the updated icons
import { FaChartLine, FaUserTie, FaBullseye, FaLightbulb } from 'react-icons/fa';
// Import your image asset (ensure the path is correct)
// import founderAvatar from '../assets/images/logo.png';
import aditi from '../assets/images/aditi-deshmukh.png'; // Updated image path

// --- Rewritten Feature Data for a Business-Centric Appeal ---
// The content is now focused on value and impact for companies and startups.
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
    // "Expertise" is replaced with a more dynamic concept.
    icon: <FaLightbulb size={40} />,
    title: 'Modern Solutions',
    text: 'Our passionate team thrives on tackling the evolving legal challenges of the digital age, providing innovative strategies for modern businesses.'
  }
];

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-24 px-4 sm:px-8 lg:px-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

          {/* ====== Left Column: Refocused Heading and Signature ====== */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#C0A068] uppercase mb-4">
              •• AGILE LEGAL PARTNERS
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1d2d3d] uppercase leading-tight">
              High-Impact Legal Counsel For Modern Business.
            </h2>
            {/* New descriptive paragraph */}
            <p className="text-[#6c757d] mt-6">
              We specialize in business-focused legal consultancy. Our sessions are short, but the impact lasts long—delivering robust strategies that protect and propel your venture forward.
            </p>

            <div className="flex items-center justify-center lg:justify-start mt-12 space-x-4">
              <img src={aditi} alt="Kristin D. Watson" className="w-16 h-16 rounded-full object-cover border-2 border-gray-200" />
              <div>
                <p className="font-bold text-lg text-[#1d2d3d]">Aditi Deshmukh</p>
                <p className="text-sm font-semibold tracking-wider text-[#C0A068]">HEAD OF IDEA</p>
              </div>
            </div>
          </div>

          {/* ====== Right Column: Updated 2x2 Feature Grid ====== */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {featuresData.map((feature, index) => (
              <div key={index} className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="text-[#C0A068] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1d2d3d] tracking-wider uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6c757d]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;