import React from 'react';
import { motion } from 'framer-motion';
import RegisterButton from './RegisterButton';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
            {/* Background Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute border border-electric-blue/20 rounded-full blur-[1px]`}
                        style={{
                            width: `${Math.random() * 200 + 100}px`,
                            height: `${Math.random() * 200 + 100}px`,
                            left: `${Math.random() * 80}%`,
                            top: `${Math.random() * 80}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 20, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                    />
                ))}
                {/* Circuit Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                    <motion.path
                        d="M0,100 H200 L250,150 H500"
                        fill="none"
                        stroke="#00F0FF"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M1000,500 H800 L750,550 H500"
                        fill="none"
                        stroke="#FFD700"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h2
                    className="text-electric-blue text-lg md:text-xl font-bold tracking-[0.2em] mb-4 uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Department of EEE Presents
                </motion.h2>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 relative inline-block"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                        EEE TECHNICAL QUIZ
                    </span>
                    <span className="text-electric-yellow ml-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">2026 ⚡</span>

                    {/* Electric Surge Effect Overlay */}
                    <motion.span
                        className="absolute inset-0 bg-electric-blue mix-blend-overlay opacity-50 blur-lg"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                    ></motion.span>
                </motion.h1>

                <motion.p
                    className="text-gray-300 md:text-xl font-light tracking-wide mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Analog Electronics • Machines • Transformers • Circuit Theory
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <RegisterButton />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
