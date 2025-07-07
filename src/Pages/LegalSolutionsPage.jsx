import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import { FaFileContract, FaBalanceScale, FaHandshake } from 'react-icons/fa';

const LegalSolutionsPage = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#054039] text-white py-20 text-center">
        <h1 className="font-serif text-5xl font-bold uppercase">Consultancy & Legal Solutions</h1>
        <p className="mt-4 text-lg text-gray-300">End-to-end legal support for your business lifecycle.</p>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center mb-20">
            <div className="flex flex-col items-center">
              <FaFileContract className="text-5xl text-[#bb8f4d] mb-4"/>
              <h3 className="font-bold text-xl text-[#054039]">Contracts & Agreements</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaBalanceScale className="text-5xl text-[#bb8f4d] mb-4"/>
              <h3 className="font-bold text-xl text-[#054039]">Compliance & Structuring</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaHandshake className="text-5xl text-[#bb8f4d] mb-4"/>
              <h3 className="font-bold text-xl text-[#054039]">Partnership & Funding Docs</h3>
            </div>
          </div>
        
          <h2 className="text-3xl font-bold text-[#054039] mb-4">Protect and Propel Your Venture</h2>
          <p className="text-[#6c757d] text-lg mb-6 leading-relaxed">
            Navigating the legal landscape is critical for any growing business. Our dedicated legal solutions are designed to provide you with the robust framework needed for secure and sustainable growth. We handle the complexities so you can focus on innovation.
          </p>
          <ul className="list-disc list-inside text-[#6c757d] text-lg space-y-2 mb-10">
            <li>Drafting and reviewing all commercial contracts.</li>
            <li>Ensuring regulatory compliance within your industry.</li>
            <li>Structuring founder agreements and shareholder documents.</li>
            <li>Preparing your business for due diligence and fundraising rounds.</li>
            <li>Intellectual Property protection and strategy.</li>
          </ul>
          <div className="text-center">
             <Link to="/#contact" className="inline-block bg-[#bb8f4d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#a27c42] transition-colors">
                Request a Consultation
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalSolutionsPage;