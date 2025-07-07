import React from 'react';
// Make sure the path to your logo/avatar is correct
// import founderAvatar from '../assets/images/logo.png';
import aditi from '../assets/images/aditi-deshmukh.png'; // Updated image path

const BizBaseLegalHeader = () => {
  return (
    <section id="biz-base-legal" className="bg-white py-24 px-4 sm:px-8 lg:px-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Block with updated brand colors */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#bb8f4d] uppercase mb-4">
              •• BIZ BASE LEGAL
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#054039] uppercase leading-tight">
              High-Impact Counsel For Modern Business.
            </h2>
            <p className="text-[#6c757d] mt-6 max-w-xl mx-auto lg:mx-0">
              We specialize in business-focused legal consultancy. Our sessions are short, but the impact lasts long—delivering robust strategies that protect and propel your venture forward.
            </p>

            {/* <div className="flex items-center justify-center lg:justify-start mt-12 space-x-4">
              <img src={aditi} alt="Kristin D. Watson" className="w-16 h-16 rounded-full object-cover border-2 border-gray-200" />
              <div>
                <p className="font-bold text-lg text-[#054039]">Aditi Deshmukh</p>
                <p className="text-sm font-semibold tracking-wider text-[#bb8f4d]">HEAD OF IDEA</p>
              </div>
            </div> */}
          </div>
          
          {/* Image/Visual Block */}
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop"
              alt="Business professionals collaborating"
              className="rounded-lg shadow-xl object-cover h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BizBaseLegalHeader;