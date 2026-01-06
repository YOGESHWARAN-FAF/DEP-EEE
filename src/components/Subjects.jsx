import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Settings } from 'lucide-react';

const subjects = [
    {
        title: "Analog Electronics",
        icon: <Activity size={32} />,
        desc: "Op-amps, Diodes, and Signal Processing.",
        color: "from-blue-500 to-cyan-500",
        animation: "oscilloscope"
    },
    {
        title: "Electrical Machines",
        icon: <Settings size={32} />,
        desc: "DC Motors, Generators, and Induction Machines.",
        color: "from-yellow-400 to-orange-500",
        animation: "motor"
    },
    {
        title: "Transformers",
        icon: <Zap size={32} />,
        desc: "Core construction, Efficiency, and Regulation.",
        color: "from-purple-500 to-pink-500",
        animation: "transformer"
    },
    {
        title: "Circuit Theory",
        icon: <Cpu size={32} />,
        desc: "Network Theorems, Resonance, and Two-Port Networks.",
        color: "from-green-400 to-emerald-600",
        animation: "circuit"
    }
];

const SubjectCard = ({ subject, index }) => {
    return (
        <motion.div
            className="relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300 overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0,240,255,0.3)" }}
        >
            {/* Background Animated Elements specific to subject */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                {subject.animation === 'oscilloscope' && (
                    <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <motion.path
                            d="M0,25 Q12.5,0 25,25 T50,25 T75,25 T100,25"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            className="text-white"
                            animate={{
                                d: [
                                    "M0,25 Q12.5,0 25,25 T50,25 T75,25 T100,25",
                                    "M0,25 Q12.5,50 25,25 T50,25 T75,25 T100,25"
                                ]
                            }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
                        />
                    </svg>
                )}
                {subject.animation === 'motor' && (
                    <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 border-2 border-dashed border-white/30 rounded-full animate-spin-slow" />
                )}
                {subject.animation === 'transformer' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-glow-slide" />
                )}
                {subject.animation === 'circuit' && (
                    <svg className="absolute w-full h-full">
                        <motion.path
                            d="M10,10 H90 V90 H10 Z"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeDasharray="5 5"
                            animate={{ strokeDashoffset: [0, -20] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>
                )}
            </div>

            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center mb-4 shadow-lg`}>
                {subject.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{subject.title}</h3>
            <p className="text-gray-400 text-sm">{subject.desc}</p>

            {/* Neon Border Pulse */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-electric-blue/50 rounded-xl transition-all duration-300" />
        </motion.div>
    );
};

const Subjects = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Subjects <span className="text-electric-blue">Covered</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {subjects.map((subject, index) => (
                        <SubjectCard key={index} subject={subject} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Subjects;
