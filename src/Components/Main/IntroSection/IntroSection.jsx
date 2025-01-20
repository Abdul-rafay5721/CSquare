import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  return (
    <div className="mt-5 flex justify-center px-4 mb-20 sm:px-30 md:px-56 lg:px-70">
      <div className="w-full md:w-11/12">
        <div
          className="p-4 md:p-8 rounded-lg bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="w-full md:w-7/12 text-white relative z-10">
            <span className="text-sm uppercase text-red-500 font-semibold tracking-wider">Compliance Services</span>
            <h2 className="text-3xl md:text-4xl font-bold my-4 leading-tight">
              Get Your Organization Compliant Today with Industry Standards
            </h2>
            <p className="mb-6 text-gray-300">
              Achieve compliance with PCI DSS, ISO 27001, GDPR, and other regulatory requirements. Our expert team ensures 
              your organization meets all necessary standards while maintaining optimal security.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center gap-2 font-semibold"
              >
                Contact Us
                <span className="text-xl">→</span>
              </Link>
              <Link 
                to="/services/compliance" 
                className="border-2 border-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-600/20 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full hidden md:block">
            <div className="h-full w-full bg-gradient-to-l from-red-600/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
