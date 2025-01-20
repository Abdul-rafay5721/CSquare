import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearchDollar, 
  FaFileAlt, 
  FaUserTie, 
  FaGlobe,
  FaMobileAlt,
  FaShieldAlt,
  FaFileContract,
  FaClipboardCheck
} from 'react-icons/fa';

const servicesData = [
  {
    title: "Audit",
    icon: <FaClipboardCheck className="text-4xl text-red-600" />,
    description: "Comprehensive system and security auditing services"
  },
  {
    title: "Compliance",
    icon: <FaFileAlt className="text-4xl text-red-600" />,
    description: "Regulatory compliance and certification assistance"
  },
  {
    title: "Consultancy",
    icon: <FaUserTie className="text-4xl text-red-600" />,
    description: "Expert cybersecurity consultation services"
  },
  {
    title: "SEO",
    icon: <FaSearchDollar className="text-4xl text-red-600" />,
    description: "Search engine optimization and digital marketing"
  },
  {
    title: "Website Development",
    icon: <FaGlobe className="text-4xl text-red-600" />,
    description: "Custom website and web application development"
  },
  {
    title: "Mobile Application",
    icon: <FaMobileAlt className="text-4xl text-red-600" />,
    description: "iOS and Android app development solutions"
  },
  {
    title: "Penetration Testing",
    icon: <FaShieldAlt className="text-4xl text-red-600" />,
    description: "Comprehensive security testing and assessment"
  },
  {
    title: "Document Review",
    icon: <FaFileContract className="text-4xl text-red-600" />,
    description: "Thorough documentation and policy review services"
  },
  {
    title: "Policy Making",
    icon: <FaFileContract className="text-4xl text-red-600" />,
    description: "Empowering through policy expertise crafting strategic frameworks"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive Solutions for Your Business</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-red-50 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <button className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2">
                  Learn More
                  <span className="text-xs">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
