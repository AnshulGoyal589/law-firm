import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaBalanceScale, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';

const Solutions = () => {
  return (
    <section id="solutions" className="bg-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#054039] uppercase">
          Our Core <span className="text-[#bb8f4d]">Offerings</span>
        </h2>
        <p className="text-lg text-[#6c757d] mt-4 mb-16 max-w-3xl mx-auto">
          We offer two distinct pathways to empower your venture whether you are a startup, an established business or a student Founder , we have got you covered.
        </p>

        {/* --- 2-Column Layout for Clickable Blocks --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Block 1: Consultancy & Legal Solutions */}
          <Link to="/legal-solutions" className="group block bg-[#f8f9fa] p-10 rounded-lg transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left">
            <div className="flex items-center mb-4">
              <FaBalanceScale className="text-4xl text-[#bb8f4d] mr-5" />
              <h3 className="font-serif text-3xl font-bold text-[#054039]">
                Consultancy & Legal Solutions
              </h3>
            </div>
            <p className="text-[#6c757d] mb-6">
              Comprehensive legal support including contracts, agreements, compliance, and fundraising readiness for established businesses.
            </p>
            <span className="font-bold text-[#bb8f4d] flex items-center group-hover:underline">
              Explore Our Legal Services
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Block 2: Biz Base Legal Program */}
          <Link to="/biz-base-legal" className="group block bg-[#f8f9fa] p-10 rounded-lg transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left">
            <div className="flex items-center mb-4">
              <FaChalkboardTeacher className="text-4xl text-[#bb8f4d] mr-5" />
              <h3 className="font-serif text-3xl font-bold text-[#054039]">
                Biz Base Legal
              </h3>
            </div>
            <p className="text-[#6c757d] mb-6">
              Specialized advisory sessions and workshops designed to equip student entrepreneurs in college incubators with essential legal knowledge.
            </p>
            <span className="font-bold text-[#bb8f4d] flex items-center group-hover:underline">
              Learn About The Program
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Solutions;