import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUniversity, FaRocket } from 'react-icons/fa';

const BizBaseLegalPage = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#054039] text-white py-20 text-center">
        <h1 className="font-serif text-5xl font-bold uppercase">Biz Base Legal Program</h1>
        <p className="mt-4 text-lg text-gray-300">Empowering the next generation of founders in college incubators.</p>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center mb-20">
            <div className="flex flex-col items-center">
              <FaChalkboardTeacher className="text-5xl text-[#bb8f4d] mb-4"/>
              <h3 className="font-bold text-xl text-[#054039]">Interactive Sessions</h3>
            </div>
             <div className="flex flex-col items-center">
              <FaUniversity className="text-5xl text-[#bb8f4d] mb-4"/>
              <h3 className="font-bold text-xl text-[#054039]">Campus Ready</h3>
            </div>
             <div className="flex flex-col items-center">
              <FaRocket className="text-5xl text-[#bb8f4d] mb-4"/>
              <h3 className="font-bold text-xl text-[#054039]">Founder Focused</h3>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-[#054039] mb-4">From Dorm Room to Boardroom</h2>
          <p className="text-[#6c757d] text-lg mb-6 leading-relaxed">
            The Biz Base Legal program is a series of curated workshops and one-on-one advisory sessions designed specifically for student entrepreneurs. We demystify the legal foundations of a startup, providing practical knowledge that is immediately applicable.
          </p>
          <ul className="list-disc list-inside text-[#6c757d] text-lg space-y-2 mb-10">
            <li>Workshops on company formation and structuring.</li>
            <li>Guidance on co-founder agreements and equity splits.</li>
            <li>Fundamentals of Intellectual Property for student innovators.</li>
            <li>Understanding term sheets and early-stage funding.</li>
            <li>Interactive Q&A sessions to address specific startup queries.</li>
          </ul>
           <div className="text-center">
             <Link to="/#contact" className="inline-block bg-[#bb8f4d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#a27c42] transition-colors">
                Bring This To Your Campus
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BizBaseLegalPage;