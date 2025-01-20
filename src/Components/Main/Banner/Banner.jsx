"use client"

import React, { useState, useEffect } from 'react'
import { motion, useAnimation, useScroll } from 'framer-motion'
import { FaShieldAlt, FaArrowDown, FaLock, FaUserShield, FaFileContract, 
         FaClipboardCheck, FaDatabase, FaFingerprint, FaUserLock, FaServer, 
         FaShieldVirus, FaFileAlt } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Banner() {
  const { scrollY } = useScroll()
  const controls = useAnimation()

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      controls.start({ opacity: 1 - latest / 500 })
    })
    return () => unsubscribe()
  }, [scrollY, controls])

  // Define security icons array
  const securityIcons = [
    FaLock, FaUserShield, FaFileContract, FaClipboardCheck, FaDatabase,
    FaFingerprint, FaUserLock, FaServer, FaShieldVirus, FaFileAlt
  ];

  return (
    <div className="h-screen relative bg-gradient-to-br from-gray-900 to-red-900 overflow-hidden">
      {/* Animated background grid */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))]"></div>
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-red-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 500}px`,
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
        
        {/* Replace floating particles with security icons */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => {
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
                  y: [0, -50, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              >
                <IconComponent size={Math.random() * 20 + 15} />
              </motion.div>
            );
          })}
        </div>

        {/* Binary code effect */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs text-white font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              {Math.random().toString(2).substr(2, 8)}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="h-full flex flex-col items-center justify-center px-4 relative z-10 w-full max-w-5xl mx-auto"
        animate={controls}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 10 }}
            className="mb-8"
          >
            <FaShieldAlt className="text-6xl text-white mx-auto" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Secure Your Digital Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Comprehensive cybersecurity and compliance solutions to protect your business
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Link
              to="services"
              smooth={true}
              duration={800}
              className="inline-block bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-8 rounded-full 
                        transform hover:scale-105 transition-all duration-300 shadow-lg hover:cursor-pointer"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <FaArrowDown className="text-white text-2xl" />
      </motion.div>
    </div>
  )
}

export default Banner

