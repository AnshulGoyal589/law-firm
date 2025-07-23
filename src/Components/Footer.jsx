import React from 'react';
// Make sure this path to your logo is correct
import footerLogo from '../assets/images/logo.png'; 

const calendlyUrl = "https://calendly.com/bizinternaglo";
const openCalendly = (e) => {
  e.preventDefault();
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: calendlyUrl });
  } else {
    window.open(calendlyUrl, "_blank"); // fallback (opens in new tab)
  }
  return false;
};


const Footer = () => {
  return (
    // Background color updated to the new deep green
    <footer id="footer" className="bg-[#054039] text-[#adb5bd] pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <img src={footerLogo} alt="Biz Internaglo" className="h-14 mb-6 mx-auto md:mx-0"/>
            <p className="max-w-md mx-auto md:mx-0 text-sm">
              Your boutique legal partners, invested in sculpting success stories. We are trusted collaborators who actively contribute to your startup's growth and security.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {/* Hover color updated to the new antique gold */}
              <li><a href="#home" className="hover:text-[#bb8f4d] transition-colors">Home</a></li>
              <li><a href="#solutions" className="hover:text-[#bb8f4d] transition-colors">Services</a></li>
              {/* <li><a href="#benefits" className="hover:text-[#bb8f4d] transition-colors">Why Us</a></li> */}
              {/* <li><a href="#founder" className="hover:text-[#bb8f4d] transition-colors">Founder</a></li> */}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-3">
              <li>Email: contact@bizinternaglo.com</li>
              {/* <li>Phone: +1 (234) 567-890</li> */}
            </ul>
            <button
  onClick={openCalendly}
              // Button colors updated to the new antique gold
              className="mt-6 inline-block bg-[#bb8f4d] text-white font-bold py-2 px-6 rounded-md hover:bg-[#a27c42] transition-all duration-300"
            >
              Schedule Consultation
            </button>
          </div>

        </div>
        <div className="mt-16 py-6 border-t border-white/10 text-center text-sm">
          <p>© {new Date().getFullYear()} Biz Internaglo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;