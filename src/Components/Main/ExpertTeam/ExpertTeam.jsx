import React from 'react';
import { FaTwitter, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Aazam Khan',
    position: 'Senior GRC consultant',
    image: 'team-1.jpg',
    socialLinks: [
      { icon: 'FaTwitter', url: '#' },
      { icon: 'FaFacebook', url: '#' },
      { icon: 'FaGoogle', url: '#' },
      { icon: 'FaInstagram', url: '#' },
    ],
  },
  {
    name: 'Shayan Ejaz',
    position: 'Senior GRC consultant',
    image: 'team-2.jpg',
    socialLinks: [
      { icon: 'FaTwitter', url: '#' },
      { icon: 'FaFacebook', url: '#' },
      { icon: 'FaGoogle', url: '#' },
      { icon: 'FaInstagram', url: '#' },
    ],
  },
  {
    name: 'Mian Qandeel',
    position: 'Unkown',
    image: 'team-5.jpg',
    socialLinks: [
      { icon: 'FaTwitter', url: '#' },
      { icon: 'FaFacebook', url: '#' },
      { icon: 'FaGoogle', url: '#' },
      { icon: 'FaInstagram', url: '#' },
    ],
  },
  {
    name: 'Arsalan Javed',
    position: 'Android Developer',
    image: 'team-6.jpg',
    socialLinks: [
      { icon: 'FaTwitter', url: '#' },
      { icon: 'FaFacebook', url: '#' },
      { icon: 'FaGoogle', url: '#' },
      { icon: 'FaInstagram', url: '#' },
    ],
  },
  {
    name: 'Abdul Rafay',
    position: 'Web Developer',
    image: 'team-1.jpg',
    socialLinks: [
      { icon: 'FaTwitter', url: '#' },
      { icon: 'FaFacebook', url: '#' },
      { icon: 'FaGoogle', url: '#' },
      { icon: 'FaInstagram', url: '#' },
    ],
  },
  {
    name: 'Abu Bakar',
    position: 'Penetration Tester',
    image: 'team-8.jpg',
    socialLinks: [
      { icon: 'FaTwitter', url: '#' },
      { icon: 'FaFacebook', url: '#' },
      { icon: 'FaGoogle', url: '#' },
      { icon: 'FaInstagram', url: '#' },
    ],
  },
];

const iconComponents = {
  FaTwitter: <FaTwitter />,
  FaFacebook: <FaFacebook />,
  FaGoogle: <FaGoogle />,
  FaInstagram: <FaInstagram />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const overlayVariants = {
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const socialIconVariants = {
  hover: i => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.2,
      ease: "easeOut"
    }
  }),
  initial: {
    y: 20,
    opacity: 0
  }
};

const ExpertTeam = () => {
  return (
    <section className="bg-[#F3F3F3] py-20 px-4 sm:px-8 md:px-12 lg:px-40">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-semibold text-sm tracking-wider uppercase block mb-3">Our Team</span>
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
            Expert Team
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover="hover"
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    className="h-80 bg-cover bg-center"
                    variants={imageVariants}
                    style={{
                      backgroundImage: `url(https://preview.colorlib.com/theme/avo/images/${member.image})`
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0"
                    variants={overlayVariants}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex justify-center space-x-4">
                        {member.socialLinks.map((link, i) => (
                          <motion.a
                            key={i}
                            custom={i}
                            variants={socialIconVariants}
                            whileHover={{ scale: 1.2 }}
                            href={link.url}
                            className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
                          >
                            {iconComponents[link.icon]}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                <motion.div 
                  className="p-6 text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-red-600 font-medium block">
                    {member.position}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
