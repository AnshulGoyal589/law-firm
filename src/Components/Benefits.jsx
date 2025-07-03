import React from 'react';
import puzzleGraphic from '../assets/images/puzzle-graphic.png'; // This is the image with the puzzle head

const benefitsData = [
    { title: 'Enhanced Fundability', description: 'Term sheet-ready companies' },
    { title: 'Risk Mitigation', description: 'Avoid penalties, lawsuits, or co-founder disputes' },
    { title: 'IP Protection', description: "Guard what's uniquely yours" },
    { title: 'Stronger Partnerships', description: 'Legal clarity = Trust & transparency' },
    { title: 'Valuation Uplift', description: 'Legally robust = more investible' }
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-[#f8f9fa] p-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
                <h2 className="text-4xl text-center lg:text-left font-bold text-[#1d2d3d] uppercase">Our Sessions are Short <br/> <span className="text-[#C0A068]">But The Impact Lasts Long.</span></h2>
                <p className="text-lg text-[#6c757d] mt-4 mb-8 text-center lg:text-left">What you and your campus gain from our partnership:</p>
                <ul className="space-y-4">
                    {benefitsData.map((benefit) => (
                        <li key={benefit.title} className="bg-white p-5 rounded-md border-l-4 border-[#C0A068] shadow-sm">
                            <h3 className="font-serif text-xl font-bold text-[#1d2d3d]">{benefit.title}</h3>
                            <p className="text-[#6c757d] mt-1">{benefit.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
                <img src={puzzleGraphic} alt="Benefits Puzzle Graphic" className="max-w-md w-full" />
            </div>
        </div>
    </section>
  );
};

export default Benefits;