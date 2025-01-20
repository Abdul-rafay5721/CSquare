import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Banner2 from '../Main/Banner2/Banner2';
import Header from '../Main/Header/Header';
import Footer from '../Main/Footer/Footer';

const ServiceTemplate = ({ serviceData }) => {
    const { serviceId } = useParams();

    if (!serviceData || !serviceData[serviceId]) {
        return <Navigate to="/404" replace />;
    }

    const service = serviceData[serviceId];

    return (
        <div>
            <Header />
            <Banner2 pageName={service.title} />
            
            <div className="relative bg-gray-50 overflow-hidden">
                {/* Decorative Shapes */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

                <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="space-y-16">
                        {/* Main Content Section */}
                        <motion.div 
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Main Content */}
                            <div className="lg:col-span-7">
                                <motion.div 
                                    className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/80"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-4">
                                        {service.title}
                                    </h1>
                                    <div className="prose max-w-none">
                                        {service.description.map((para, index) => (
                                            <motion.p 
                                                key={index} 
                                                className="text-gray-600 mb-4 leading-relaxed"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 + index * 0.1 }}
                                            >
                                                {para}
                                            </motion.p>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Features Section */}
                            <div className="lg:col-span-5">
                                {service.features && (
                                    <motion.div 
                                        className="sticky top-24 space-y-6"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/80">
                                            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                                                <span className="w-12 h-1 bg-red-600 mr-4"></span>
                                                Key Features
                                            </h2>
                                            <ul className="">
                                                {service.features.map((feature, index) => (
                                                    <motion.li 
                                                        key={index} 
                                                        className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.5 + index * 0.1 }}
                                                    >
                                                        <span className="text-red-600 mr-3 text-xl">•</span>
                                                        <span className="text-gray-700">{feature}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Contact Card */}
                                        <motion.div 
                                            className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-xl p-8 text-white"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <h3 className="text-xl font-bold mb-4">Need Assistance?</h3>
                                            <p className="mb-6">Contact our experts for a detailed consultation about your requirements.</p>
                                            <Link to='/contact' className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                                                Contact Us
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>

                        {/* Detailed Content Sections */}
                        {service.detailedContent && (
                            <>
                                {/* Overview Section */}
                                {service.detailedContent.overview && (
                                    <motion.section 
                                        className="bg-white rounded-2xl shadow-xl p-8"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h2 className="text-2xl font-bold mb-6">{service.detailedContent.overview.title}</h2>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                {service.detailedContent.overview.content.map((para, idx) => (
                                                    <p key={idx} className="text-gray-600">{para}</p>
                                                ))}
                                            </div>
                                            {service.detailedContent.overview.image && (
                                                <div className="rounded-xl overflow-hidden">
                                                    <img 
                                                        src={service.detailedContent.overview.image} 
                                                        alt={service.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </motion.section>
                                )}

                                {/* Requirements Section */}
                                {service.detailedContent.requirements && (
                                    <motion.section 
                                        className="bg-white rounded-2xl shadow-xl p-8"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h2 className="text-2xl font-bold mb-6">{service.detailedContent.requirements.title}</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {service.detailedContent.requirements.sections.map((section, idx) => (
                                                <div key={idx} className="bg-gray-50 rounded-xl p-6">
                                                    <h3 className="text-lg font-semibold mb-4 text-red-600">{section.title}</h3>
                                                    <ul className="space-y-2">
                                                        {section.items.map((item, i) => (
                                                            <li key={i} className="flex items-start">
                                                                <span className="text-red-600 mr-2">•</span>
                                                                <span className="text-gray-600">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.section>
                                )}

                                {/* Benefits Section */}
                                {service.detailedContent.benefits && (
                                    <motion.section 
                                        className="bg-white rounded-2xl shadow-xl p-8"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <h2 className="text-2xl font-bold mb-6">{service.detailedContent.benefits.title}</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {service.detailedContent.benefits.items.map((benefit, idx) => (
                                                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-xl">
                                                    <div className="mr-4">
                                                        <img src={benefit.icon} alt={benefit.title} className="w-8 h-8" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                                                        <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.section>
                                )}

                                {/* Testimonials Section */}
                                {service.detailedContent.testimonials && (
                                    <motion.section 
                                        className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-xl p-8 text-white"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {service.detailedContent.testimonials.map((testimonial, idx) => (
                                                <div key={idx} className="bg-white/10 rounded-xl p-6">
                                                    <p className="italic mb-4">"{testimonial.quote}"</p>
                                                    <div className="flex items-center">
                                                        <img 
                                                            src={testimonial.image} 
                                                            alt={testimonial.author}
                                                            className="w-12 h-12 rounded-full mr-4"
                                                        />
                                                        <div>
                                                            <p className="font-semibold">{testimonial.author}</p>
                                                            <p className="text-sm text-white/80">{testimonial.position}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.section>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ServiceTemplate;
