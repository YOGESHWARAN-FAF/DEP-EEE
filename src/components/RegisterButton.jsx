import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RegisterButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfVOhV8g38RBPpw9iOddI8g_v6sa1Y5kHeR-f0EeZXYxNzOJQ/viewform?usp=dialog', '_blank');
    };

    return (
        <div className="relative inline-block group">
            {/* Shock Ripple Effect */}
            <AnimatePresence>
                {isHovered && (
                    <>
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-electric-blue"
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-full border border-electric-yellow"
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 1.3, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
                        />
                    </>
                )}
            </AnimatePresence>

            <motion.button
                className="relative z-10 px-10 py-4 bg-transparent border-2 border-electric-blue text-electric-blue font-bold text-lg md:text-xl tracking-wider rounded-full overflow-hidden hover:bg-electric-blue hover:text-deep-space transition-colors duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="relative z-20 flex items-center gap-2">
                    REGISTER NOW ⚡
                </span>

                {/* Fill animation */}
                <motion.div
                    className="absolute inset-0 bg-electric-blue"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
                />
            </motion.button>
        </div>
    );
};

export default RegisterButton;
