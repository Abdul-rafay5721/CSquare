import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCode, FaClipboardCheck, FaUserShield, FaSearch } from "react-icons/fa";

const About = () => {
    return (
        <section className="py-20 px-4 sm:px-30 md:px-56 lg:px-80 overflow-hidden">
            <div className="container mx-auto">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.span 
                        className="text-red-600 font-semibold mb-2 block"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        WHO WE ARE
                    </motion.span>
                    <motion.h2 
                        className="text-4xl text-[#333333] font-bold relative inline-block"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                    >
                        ABOUT US
                        <motion.div 
                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            viewport={{ once: true }}
                        ></motion.div>
                    </motion.h2>
                </motion.div>
                
                {/* Main About Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                    {/* Image Section */}
                    <motion.div 
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-600"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <motion.div
                            className="h-[500px] w-full bg-cover bg-center shadow-2xl relative z-10"
                            style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/avo/images/about.jpg)' }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                        <motion.div 
                            className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-red-600"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                        ></motion.div>
                    </motion.div>
                    
                    {/* Content Section */}
                    <motion.div 
                        className="w-full lg:w-1/2 space-y-6"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h3 
                            className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Best Cybersecurity and Compliance Solutions Provider
                        </motion.h3>
                        <div className="space-y-4">
                            <motion.p 
                                className="text-gray-600 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                With over <span className="text-red-600 font-semibold">two decades of experience</span> in cybersecurity, we've protected countless organizations 
                                from emerging digital threats. Our expert team combines cutting-edge technology with 
                                comprehensive security strategies to safeguard your digital assets.
                            </motion.p>
                            <motion.p 
                                className="text-gray-600 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                viewport={{ once: true }}
                            >
                                Our holistic approach to security encompasses everything from vulnerability assessment 
                                to compliance management. We understand that each organization faces unique security 
                                challenges, which is why we deliver <span className="text-red-600 font-semibold">tailored solutions</span> that align with your specific 
                                needs and regulatory requirements.
                            </motion.p>
                            <motion.button 
                                className="mt-8 px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2 group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View our solutions
                                <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
