import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoApple } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h1 className="text-xl font-semibold mb-4">Zocdoc</h1>
          <ul className="space-y-2">
            <FooterLink to="/" text="Home" />
            <FooterLink to="/about" text="About Us" />
            <FooterLink to="/careers" text="Careers" />
            <FooterLink to="/contact" text="Contact Us" />
            <FooterLink to="/help" text="Help Center" />
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-4">Discover</h1>
          <ul className="space-y-2">
            <FooterLink to="#" text="Stories for Patients" />
            <FooterLink to="#" text="Provider Resources" />
            <FooterLink to="#" text="Community Standards" />
            <FooterLink to="#" text="Privacy & Data" />
            <FooterLink to="#" text="Verified Reviews" />
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-4">For Doctors</h1>
          <ul className="space-y-2">
            <FooterLink to="#" text="List Your Practice" />
            <FooterLink to="#" text="Zocdoc for Health Systems" />
            <FooterLink to="#" text="Become an EHR Partner" />
            <FooterLink to="#" text="Zocdoc for Developers" />
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-4">Get the Zocdoc App</h1>
          <div className="space-y-3">
            <div className="w-40 py-2 px-2 cursor-pointer bg-black rounded-lg flex items-center gap-3 hover:bg-gray-800 transition duration-300">
              <IoLogoApple size={28} className="text-white" />
              <div className="text-left">
                <p className="text-xs text-gray-300">Download on the</p>
                <h1 className="font-medium text-white text-lg">App Store</h1>
              </div>
            </div>
            <div className="w-40 py-2 px-2 cursor-pointer bg-black rounded-lg flex items-center gap-3 hover:bg-gray-800 transition duration-300">
              <IoLogoGooglePlaystore size={26} className="text-white" />
              <div className="text-left">
                <p className="text-xs text-gray-300">Get it on</p>
                <h1 className="font-medium text-white text-lg">Google Play</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4 px-6 text-sm text-gray-400 text-center">
        The content on Zocdoc is for informational purposes only and does not constitute medical advice, diagnosis, or treatment.
      </div>
      <div className="bg-black py-5 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} ZocDoc Inc. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <FooterLink to="#" text="Privacy Policy" />
          <FooterLink to="#" text="Terms of Service" />
          <FooterLink to="#" text="Cookie Policy" />
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-gray-400 hover:text-white transition-colors duration-300">
      {text}
    </Link>
  </li>
);

export default Footer;