import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaChevronRight, FaMap, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';
import Logo from '../Logo/LogoIcon';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-4 sm:px-30 md:px-56 lg:px-70">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-16">
          <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
            <div className="mb-4">
              <Logo color="#b91c1c" />
              <p className="mb-5 mt-5 font-extrabold">Compliance and Cybersecurity</p>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Community</h2>
              <ul className="space-y-2">
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><FaChevronRight className="mr-2" />Projects</a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><FaChevronRight className="mr-2" />Team</a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><FaChevronRight className="mr-2" />Reviews</a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><FaChevronRight className="mr-2" />FAQs</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">About Us</h2>
              <ul className="space-y-2">
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><FaChevronRight className="mr-2" />Our Story</a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><FaChevronRight className="mr-2" />Meet the team</a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><FaChevronRight className="mr-2" />Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Company</h2>
              <ul className="space-y-2">
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><FaChevronRight className="mr-2" />About Us</a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><FaChevronRight className="mr-2" />Press</a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><FaChevronRight className="mr-2" />Contact</a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><FaChevronRight className="mr-2" />Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Have a Questions?</h2>
              <div className="block-23">
                <ul className="space-y-2">
                  <li className="flex items-center"><FaMap className="mr-2 text-5xl" /><span>Plot # 45, Street # 32, H-Block Extension, Soan Garden Islamabad</span></li>
                  <li className="flex items-center"><FaPhone className="mr-2" /><a href="tel:+23923929210" className="text-gray-400 hover:text-white">+2 392 3929 210</a></li>
                  <li className="flex items-center"><FaEnvelope className="mr-2" /><a href="mailto:info@yourdomain.com" className="text-gray-400 hover:text-white">info@yourdomain.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400">
          <p>
            Copyright ©{new Date().getFullYear()} 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
