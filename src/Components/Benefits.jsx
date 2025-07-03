import React from 'react';
import puzzleGraphic from '../assets/images/puzzle-graphic.png'; // Make sure this path is correct

// Your data logic remains unchanged
const benefitsData = [
    { title: 'Enhanced Fundability', description: 'Term sheet-ready companies' },
    { title: 'Risk Mitigation', description: 'Avoid penalties, lawsuits, or co-founder disputes' },
    { title: 'IP Protection', description: "Guard what's uniquely yours" },
    { title: 'Stronger Partnerships', description: 'Legal clarity = Trust & transparency' },
    { title: 'Valuation Uplift', description: 'Legally robust = more investible' }
];

const Benefits = () => {
  return (
    // IMPROVEMENT: Padding is now responsive. Less on mobile, more on desktop.
    <section id="benefits" className="bg-[#f8f9fa] py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      {/* IMPROVEMENT: Removed the fixed-width 'container' class to allow the section's padding to control spacing. 
          Using 'max-w-7xl' to cap the width on very large screens for better readability. */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column: Text Content */}
            {/* IMPROVEMENT: The order of the image is changed on mobile for better visual flow. */}
            <div className="lg:w-1/2 order-2 lg:order-1">
                {/* IMPROVEMENT: Responsive text size for the heading. */}
                <h2 className="text-3xl sm:text-4xl text-center lg:text-left font-bold text-[#1d2d3d] uppercase">
                    Our Sessions are Short <br/> <span className="text-[#C0A068]">But The Impact Lasts Long.</span>
                </h2>
                <p className="text-lg text-[#6c757d] mt-4 mb-8 text-center lg:text-left">
                    What you and your campus gain from our partnership:
                </p>
                <ul className="space-y-4 max-w-lg mx-auto lg:mx-0">
                    {benefitsData.map((benefit) => (
                        <li key={benefit.title} className="bg-white p-5 rounded-md border-l-4 border-[#C0A068] shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="font-serif text-xl font-bold text-[#1d2d3d]">{benefit.title}</h3>
                            <p className="text-[#6c757d] mt-1">{benefit.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Column: Image */}
            {/* IMPROVEMENT: The image appears first on mobile screens. */}
            <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
                <img src={puzzleGraphic} alt="Benefits Puzzle Graphic" className="w-full max-w-sm sm:max-w-md" />
            </div>
      </div>
    </section>
  );
};

export default Benefits;