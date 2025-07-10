import React, { useState } from 'react';
// Import professional icons (no change here)
import { FaRocket, FaUsers, FaChartPie, FaExclamationTriangle } from 'react-icons/fa';

// Data for the two states of the interactive toggle (no change here)
const focusAreas = [
  {
    icon: <FaRocket size={32} />,
    title: 'Product & Growth',
    items: ['Building the MVP', 'Finding Product-Market Fit', 'User Acquisition'],
  },
  {
    icon: <FaUsers size={32} />,
    title: 'Team & Culture',
    items: ['Hiring Key Talent', 'Scaling the Team', 'Defining Company Culture'],
  },
  {
    icon: <FaChartPie size={32} />,
    title: 'Funding & Metrics',
    items: ['Investor Pitches', 'Tracking KPIs', 'Managing Burn Rate'],
  },
];

const problemArea = {
  icon: <FaExclamationTriangle size={48} />,
  title: 'The Legal Blind Spot',
  items: [
    'Unprotected Intellectual Property',
    'Vague Co-Founder Agreements',
    'Non-compliant Hiring Practices',
    'Weak Vendor & Client Contracts',
  ],
};

const ProblemStatement = () => {
  const [isProblemVisible, setIsProblemVisible] = useState(false);

  return (
    // RESPONSIVE CHANGE: Padding is now responsive. Less on mobile, more on desktop.
    <section id="problem" className="bg-[#f8f9fa] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* --- More engaging, founder-centric heading --- */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          {/* RESPONSIVE CHANGE: Font size adapts to screen width. */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#054039] uppercase">
            Are You Facing The <span className="text-[#bb8f4d]">Founder's Paradox?</span>
          </h2>
          <p className="text-lg text-[#6c757d] mt-4">
            You're building the future, but a single legal oversight can undermine it all. We get it.
          </p>
        </div>

        {/* --- The Interactive Toggle Switch (no changes needed) --- */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`font-semibold transition-colors ${!isProblemVisible ? 'text-[#054039]' : 'text-gray-400'}`}>
            Your Focus
          </span>
          <button
            onClick={() => setIsProblemVisible(!isProblemVisible)}
            className={`relative w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isProblemVisible ? 'bg-red-500' : 'bg-[#054039]'}`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isProblemVisible ? 'translate-x-6' : 'translate-x-0'}`}
            ></div>
          </button>
          <span className={`font-semibold transition-colors ${isProblemVisible ? 'text-red-500' : 'text-gray-400'}`}>
            The Blind Spot
          </span>
        </div>

        {/* --- Dynamic Content Area --- */}
        {/* RESPONSIVE CHANGE: Removed fixed height and absolute positioning in favor of conditional rendering. 
             This is the most robust way to handle the content height changing on mobile when cards stack. */}
        <div>
          {!isProblemVisible ? (
            // STATE 1: Founder's Focus Areas
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {focusAreas.map((area) => (
                <div key={area.title} className="bg-white p-8 rounded-lg text-center shadow-lg border-t-4 border-[#bb8f4d]">
                  <div className="text-[#bb8f4d] mx-auto mb-4">{area.icon}</div>
                  <h3 className="font-serif text-2xl mb-4 font-bold text-[#054039]">{area.title}</h3>
                  <ul className="text-[#6c757d] space-y-2">
                    {area.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            // STATE 2: The Legal Blind Spot
            <div className="flex items-center justify-center">
              <div className="bg-white p-10 rounded-lg text-center shadow-2xl border-t-4 border-red-500 max-w-2xl w-full">
                  <div className="text-red-500 mx-auto mb-4">{problemArea.icon}</div>
                  <h3 className="font-serif text-3xl mb-4 font-bold text-red-500">{problemArea.title}</h3>
                  <p className="text-gray-500 mb-6">These are the silent killers of startup potential:</p>
                  <ul className="text-[#6c757d] space-y-2 font-medium">
                    {problemArea.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ProblemStatement;