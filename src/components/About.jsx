import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-electric-blue rounded-tl-lg" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-electric-blue rounded-br-lg" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">About the <span className="text-electric-blue">Quiz</span></h2>
                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                        An electrifying challenge designed exclusively for <span className="font-semibold text-white">2nd Year EEE Students</span>.
                        This technical quiz goes beyond basics, emphasizing deep conceptual understanding,
                        numerical problem-solving, and real-world applications in electrical engineering.
                    </p>

                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <div className="px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm">Concept Mastery</div>
                        <div className="px-4 py-2 bg-electric-yellow/10 border border-electric-yellow/30 rounded-full text-electric-yellow text-sm">Numerical Ability</div>
                        <div className="px-4 py-2 bg-neon-purple/10 border border-neon-purple/30 rounded-full text-neon-purple text-sm">Practical Application</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
