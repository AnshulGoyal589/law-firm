import React, { useState } from 'react';
import faqImage from '../assets/images/faq-image.jpg';
import { FaGavel, FaPlus, FaMinus } from 'react-icons/fa';

// A highly-styled, reusable Accordion Item to match the design
const AccordionItem = ({ title, isOpen, onClick }) => {
  return (
    // The container for each vertical item, with a border on the right
    <div className="w-full border-b lg:border-b-0 lg:border-r border-gray-200">
      <button
        onClick={onClick}
        className="p-4 lg:p-6 flex flex-row lg:flex-col justify-between items-center text-left lg:text-center group"
      >
        {/* The + / - icon at the top */}
        <span className="text-[#C0A068] text-lg lg:text-xl order-last lg:order-first">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
        
        {/* The vertical text. 'flex-grow' helps it take space */}
        <h3 className="font-semibold uppercase tracking-wider text-[#1d2d3d] group-hover:text-[#C0A068] transition-colors lg:[writing-mode:vertical-rl] lg:transform lg:rotate-180 lg:mt-6 flex-grow flex items-center">
          {title}
        </h3>
      </button>
    </div>
  );
};


const FAQ = () => {
  // First item is open by default to match the screenshot's state
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
    <section id="faq" className="bg-white py-2">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#C0A068] uppercase mb-4">
            •• FAQ & A. ••
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1d2d3d] uppercase">
            Get Every Answers
          </h2>
        </div>

        {/* Main Content Grid - using flexbox for more control over alignment */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          
          {/* Left Accordion Column */}
          <div className="flex justify-around hidden lg:block w-full lg:w-auto">
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

          {/* Center Content Column */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
            <img src={faqImage} alt="Legal professional" className="w- rounded-md shadow-lg" />
            <div className="text-center md:text-left">
              <FaGavel className="text-5xl text-[#C0A068] mx-auto md:mx-0 mb-6" />
              <p className="text-[#6c757d] mb-8 leading-relaxed">
                A law firm is a business entity formed by one or more lawyers to engage in the practice of law. The primary service offered is to advise clients about their legal rights and represent them in civil matters.
              </p>
              <br />
              <a href="#contact" className="inline-block border border-[#C0A068] text-[#1d2d3d] font-bold py-3 px-8 rounded-md hover:bg-[#C0A068] hover:text-white transition-all duration-300">
                GET IN TOUCH
              </a>
            </div>
          </div>
          
          {/* Right Accordion Column */}
          <div className="flex justify-around hidden lg:block lg:justify-start w-full lg:w-auto">
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