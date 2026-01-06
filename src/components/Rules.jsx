import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileCheck } from 'lucide-react';

const Rules = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Team <span className="text-electric-yellow">Rules</span></h2>
                    <div className="h-1 w-24 bg-electric-yellow mx-auto rounded-full shadow-[0_0_10px_#FFD700]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mb-6 text-electric-blue">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Team Size</h3>
                        <p className="text-gray-300">1 – 4 Members per team.</p>
                    </motion.div>

                    <motion.div
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-16 h-16 bg-electric-yellow/20 rounded-full flex items-center justify-center mb-6 text-electric-yellow">
                            <FileCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Registration</h3>
                        <p className="text-gray-300">Only one form submission per team is required.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Rules;
