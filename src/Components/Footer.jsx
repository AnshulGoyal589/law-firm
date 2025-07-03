import React from 'react';
import footerLogo from '../assets/images/logo.png'; // This is the logo with the tagline

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1d2d3d] text-[#adb5bd] pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* About */}
          <div className="lg:col-span-2">
            <img src={footerLogo} alt="Biz Internaglo" className="h-14 mb-6 mx-auto md:mx-0"/>
            <p className="max-w-md mx-auto md:mx-0 text-sm">
              Your boutique legal partners, invested in sculpting success stories. We are trusted collaborators who actively contribute to your startup's growth and security.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-[#C0A068] transition-colors">Home</a></li>
              <li><a href="#solutions" className="hover:text-[#C0A068] transition-colors">Services</a></li>
              <li><a href="#benefits" className="hover:text-[#C0A068] transition-colors">Why Us</a></li>
              <li><a href="#founder" className="hover:text-[#C0A068] transition-colors">Founder</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-3">
              <li>Email: contact@bizBaselegal.com</li>
              <li>Phone: +1 (234) 567-890</li>
            </ul>
            <a 
              href="mailto:contact@bizinternaglo.com" 
              className="mt-6 inline-block bg-[#C0A068] text-white font-bold py-2 px-6 rounded-md hover:bg-[#a88a59] transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
        <div className="mt-16 py-6 border-t border-white/10 text-center text-sm">
          <p>© {new Date().getFullYear()} BizBase Legal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;