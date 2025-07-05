import React, { useState } from 'react';
import faqImage from '../assets/images/faq-image.jpg'; // Make sure this path is correct
import { FaGavel, FaPlus, FaMinus } from 'react-icons/fa';

// AccordionItem with updated brand colors
const AccordionItem = ({ title, isOpen, onClick }) => {
  return (
    <div className="w-full border-b lg:border-b-0 lg:border-r border-gray-200">
      <button
        onClick={onClick}
        className="p-4 lg:p-6 flex flex-row lg:flex-col justify-between items-center text-left lg:text-center group"
      >
        {/* Icon color updated */}
        <span className="text-[#bb8f4d] text-lg lg:text-xl order-last lg:order-first">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
        
        {/* Title and hover colors updated */}
        <h3 className="font-semibold uppercase tracking-wider text-[#054039] group-hover:text-[#bb8f4d] transition-colors lg:[writing-mode:vertical-rl] lg:transform lg:rotate-180 lg:mt-6 flex-grow flex items-center">
          {title}
        </h3>
      </button>
    </div>
  );
};


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1); 

  const faqData = [
    { id: 0, title: 'Are contact forms user-friendly?' },
    { id: 1, title: 'Office locations & hours listed?' },
    { id: 2, title: 'How can I get refund?' },
    { id: 3, title: 'What will be terms & condition?' },
    { id: 4, title: 'Our work process' },
  ];

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading with updated brand colors */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#bb8f4d] uppercase mb-4">
            •• FAQ & A. ••
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#054039] uppercase">
            Get Every Answers
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          
          {/* Left Accordion Column */}
          <div className="flex justify-around hidden lg:flex w-full lg:w-auto">
            <AccordionItem 
              title={faqData[0].title} 
              isOpen={openIndex === 0} 
              onClick={() => handleAccordionClick(0)} 
            />
            <AccordionItem 
              title={faqData[1].title} 
              isOpen={openIndex === 1} 
              onClick={() => handleAccordionClick(1)} 
            />
          </div>

          {/* Center Content Column with updated brand colors */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
            <img src={faqImage} alt="Legal professional" className="w-full rounded-md shadow-lg" />
            <div className="text-center md:text-left">
              <FaGavel className="text-5xl text-[#bb8f4d] mx-auto md:mx-0 mb-6" />
              <p className="text-[#6c757d] mb-8 leading-relaxed">
                A law firm is a business entity formed by one or more lawyers to engage in the practice of law. The primary service offered is to advise clients about their legal rights and represent them in civil matters.
              </p>
              <br />
              <a href="#contact" className="inline-block border border-[#bb8f4d] text-[#054039] font-bold py-3 px-8 rounded-md hover:bg-[#bb8f4d] hover:text-white transition-all duration-300">
                GET IN TOUCH
              </a>
            </div>
          </div>
          
          {/* Right Accordion Column */}
          <div className="flex justify-around hidden lg:flex lg:justify-start w-full lg:w-auto">
            <AccordionItem 
              title={faqData[2].title} 
              isOpen={openIndex === 2} 
              onClick={() => handleAccordionClick(2)} 
            />
            <AccordionItem 
              title={faqData[3].title} 
              isOpen={openIndex === 3} 
              onClick={() => handleAccordionClick(3)} 
            />
             <AccordionItem 
              title={faqData[4].title} 
              isOpen={openIndex === 4} 
              onClick={() => handleAccordionClick(4)} 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;