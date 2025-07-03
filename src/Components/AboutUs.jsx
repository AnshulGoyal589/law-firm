import React from 'react';
// Import the icons you need
import { FaChartLine, FaUserTie, FaBullseye, FaBookOpen } from 'react-icons/fa';
// Import the image assets
// import founderAvatar from '../assets/images/founder-avatar.jpg';
import founderAvatar from '../assets/images/logo.png';
// Data for the feature grid to keep the code clean
const featuresData = [
  {
    icon: <FaChartLine size={40} />,
    title: 'ROI Growth',
    text: 'A law firm is a business entity formed by one or more lawyers to engage in the practice of law.'
  },
  {
    icon: <FaUserTie size={40} />,
    title: 'Our Mission',
    text: 'Senior lawyers who share ownership and management responsibilities.'
  },
  {
    icon: <FaBullseye size={40} />,
    title: 'Approach',
    text: 'They usually have less experience than partners and work on cases under their supervision.'
  },
  {
    icon: <FaBookOpen size={40} />,
    title: 'Expertise',
    text: 'Staff who assist lawyers in preparing cases, conducting research, and managing documentation.'
  }
];

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-24 px-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

          {/* ====== Left Column: Heading and Signature ====== */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#C0A068] uppercase mb-4">
              •• Since From 1990
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1d2d3d] uppercase leading-tight">
              We Are Bringing Solutions By Providing Support For Legal System.
            </h2>
            <div className="flex items-center justify-center lg:justify-start mt-12 space-x-4">
              <img src={founderAvatar} alt="Kristin D. Watson" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="font-bold text-lg text-[#1d2d3d]">KRISTIN D WATSON</p>
                <p className="text-sm font-semibold tracking-wider text-[#C0A068]">HEAD OF IDEA</p>
              </div>
              {/* <img src={signature} alt="Signature" className="h-12" /> */}
            </div>
          </div>

          {/* ====== Right Column: 2x2 Feature Grid ====== */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {featuresData.map((feature, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-[#C0A068] mb-4 inline-block">
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