import React from 'react';
// Import a relevant icon to replace the image
import { FaShieldAlt } from 'react-icons/fa';

// Data for the benefits list (remains the same)
const benefitsData = [
    { title: 'Enhanced Fundability', description: 'Term sheet-ready companies' },
    { title: 'Risk Mitigation', description: 'Avoid penalties, lawsuits, or co-founder disputes' },
    { title: 'IP Protection', description: "Guard what's uniquely yours" },
    { title: 'Stronger Partnerships', description: 'Legal clarity = Trust & transparency' },
    { title: 'Valuation Uplift', description: 'Legally robust = more investible' }
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-[#f8f9fa] py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Column: Text Content (no changes here) */}
            <div className="lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl text-center lg:text-left font-bold text-[#054039] uppercase">
                    Our Sessions are Short <br/> <span className="text-[#bb8f4d]">But The Impact Lasts Long.</span>
                </h2>
                <p className="text-lg text-[#6c757d] mt-4 mb-8 text-center lg:text-left">
                    What you and your campus gain from our partnership:
                </p>
                <ul className="space-y-4 max-w-lg mx-auto lg:mx-0">
                    {benefitsData.map((benefit) => (
                        <li 
                            key={benefit.title} 
                            className="bg-white p-5 rounded-md border-l-4 border-[#bb8f4d] shadow-sm transform hover:-translate-y-1 transition-transform duration-300"
                        >
                            <h3 className="font-serif text-xl font-bold text-[#054039]">{benefit.title}</h3>
                            <p className="text-[#6c757d] mt-1">{benefit.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* --- Right Column: NEW Value Proposition Card (Replaces the Image) --- */}
            <div className="lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
                <div className="bg-white p-10 rounded-lg shadow-2xl text-center max-w-md border-t-8 border-[#bb8f4d]">
                    
                    <FaShieldAlt className="text-5xl text-[#bb8f4d] mx-auto mb-6" />

                    <h3 className="font-serif text-3xl font-bold text-[#054039] mb-4">
                        Your Legal Foundation, Solidified.
                    </h3>
                    
                    <p className="text-[#6c757d] mb-8">
                        We don't just offer advice; we build a robust legal framework that protects your IP, contracts, and compliance from day one.
                    </p>

                    {/* Optional: Add a powerful statistic here */}
                    <div className="my-8 pt-6 border-t border-gray-200">
                        <p className="text-6xl font-bold text-[#054039]">90%+*</p>
                        <p className="text-sm uppercase tracking-wider text-[#6c757d]">Client Investment Readiness</p>
                        <p className="text-xs text-gray-400 mt-1">*Based on past client outcomes</p>
                    </div>

                    <a href="#contact" className="inline-block bg-[#054039] text-white font-bold py-3 px-8 rounded-md hover:bg-[#032a25] transition-all duration-300">
                      Secure Your Startup
                    </a>
                </div>
            </div>
      </div>
    </section>
  );
};

export default Benefits;