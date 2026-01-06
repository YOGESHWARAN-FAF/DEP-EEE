import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-deep-space/80 backdrop-blur-md border-b border-white/5 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-center items-center">
                <div className="relative group">
                    <div className="text-white text-sm md:text-base tracking-widest uppercase font-medium text-center">
                        Mahendra Engineering College (Autonomous), Namakkal
                    </div>
                    <motion.div
                        className="absolute -bottom-1 left-0 w-full h-[1px] bg-electric-blue shadow-[0_0_8px_#00F0FF]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
