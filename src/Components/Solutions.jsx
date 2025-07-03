import React from 'react';

const solutionsData = [
  { icon: '🏛️', title: 'Structuring', description: 'How to structure a company right from Day 1.' },
  { icon: '🤝', title: 'Partnerships', description: 'Forming strong co-founder & partnership agreements.' },
  { icon: '💰', title: 'Fund Raising', description: 'Preparing legally for fundraising & investor readiness.' },
  { icon: '🛡️', title: 'Compliance', description: 'From ESOPs to compliance basics, and much more.' },
];

const Solutions = () => {
  return (
    <section id="solutions" className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#1d2d3d] uppercase">From <span className="text-[#C0A068]">Confusion</span> to <span className="text-[#C0A068]">Clarity</span></h2>
        <p className="text-lg text-[#6c757d] mt-4 mb-12 max-w-3xl mx-auto">
          Our immersive sessions provide the legal literacy that empowers founders and builders to move forward with confidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionsData.map((solution) => (
            <div key={solution.title} className="bg-[#f8f9fa] p-8 rounded-lg transform hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">{solution.icon}</div>
              <h3 className="font-serif text-2xl font-bold text-[#1d2d3d] mb-3">{solution.title}</h3>
              <p className="text-[#6c757d]">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;