import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { FaLock, FaUserShield, FaFileContract, FaClipboardCheck, FaDatabase } from 'react-icons/fa';

function Banner2(props) {
    const securityIcons = [FaLock, FaUserShield, FaFileContract, FaClipboardCheck, FaDatabase];

    return (
        <div className="relative h-[80vh] bg-gradient-to-br from-gray-900 to-red-900 overflow-hidden">
            {/* Animated background */}
            <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))]"></div>

                {/* Animated lines */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-px bg-red-500"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${Math.random() * 200 + 300}px`,
                            }}
                            animate={{
                                opacity: [0.1, 0.5, 0.1],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                {/* Floating security icons */}
                <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => {
                        const IconComponent = securityIcons[i % securityIcons.length];
                        return (
                            <motion.div
                                key={i}
                                className="absolute text-red-500/30"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -30, 0],
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: Math.random() * 4 + 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <IconComponent size={Math.random() * 20 + 15} />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Centered Content */}
            <div className='absolute inset-0 flex items-center justify-center px-4 lg:px-80'>
                <motion.div 
                    className='text-center'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1 
                        className='text-5xl md:text-7xl font-extrabold text-white'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {props.pageName}
                    </motion.h1>
                    <motion.div 
                        className='flex items-center justify-center mt-6 text-[#ffffff99]'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Banner2;