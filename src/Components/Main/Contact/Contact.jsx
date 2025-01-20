import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaPaperPlane, FaGlobe } from 'react-icons/fa';

function Contact() {
    return (
        <section className="relative px-4 sm:px-30 md:px-56 lg:px-80 py-20 bg-gradient-to-b from-gray-50 to-white">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 -top-48 -left-48 bg-red-600/5 rounded-full blur-3xl"></div>
                <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-red-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <div className="text-center mb-16">
                    <span className="text-red-600 font-semibold text-sm tracking-wider uppercase">Have a Project?</span>
                    <h2 className="text-4xl font-bold mt-2 mb-4">Contact US</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Let's discuss how we can help secure your digital assets and ensure compliance with industry standards
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Form */}
                    <div className="lg:w-2/3">
                        <form className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-white/80">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none"
                                    placeholder="Project Discussion"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button className="w-full bg-red-600 text-white py-4 px-8 rounded-lg hover:bg-red-700 transform hover:-translate-y-1 transition-all duration-300 font-semibold text-lg">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:w-1/3 space-y-6">
                        {[
                            { icon: <FaMapMarkerAlt/>, title: "Address", content: "Plot # 45, Street # 32, H-Block Extension, Soan Garden Islamabad", link: false },
                            { icon: <FaPhone/>, title: "Phone", content: "+ 1235 2355 98", link: "tel:+12352355980" },
                            { icon: <FaPaperPlane/>, title: "Email", content: "info@yoursite.com", link: "mailto:info@yoursite.com" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-lg mr-4 shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                    {item.link ? (
                                        <a href={item.link} className="text-red-600 hover:text-red-700 transition-colors duration-300">
                                            {item.content}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600">{item.content}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;