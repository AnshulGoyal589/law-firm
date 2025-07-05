import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ProblemStatement from './Components/ProblemStatement';
import Solutions from './Components/Solutions';
import Benefits from './Components/Benefits';
import Founder from './Components/Founder';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';
import ContactForm from './Components/ContactForm';
import FoundersSection from './Components/Founderssection';
import BizBaseLegalHeader from './Components/BizBaseLegalHeader ';
import AboutFeatures from './Components/AboutFeatures';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BizBaseLegalHeader/>
        <AboutFeatures/>
        <ProblemStatement />
        <Solutions />
        <Benefits />
        <Founder />
        <FoundersSection/>
        <Testimonial />
        <FAQ/>
        <ContactForm/>
      </main>
      <Footer />
    </>
  );
}

export default App;