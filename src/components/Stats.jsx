import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shirt, Star, Bot } from 'lucide-react';

const Stats = () => {
    const stats = [
        { icon: <Users size={32} />, value: "10K+", label: "Active Users" },
        { icon: <Shirt size={32} />, value: "50K+", label: "Outfits Scored" },
        { icon: <Star size={32} />, value: "95%", label: "Satisfaction" },
        { icon: <Bot size={32} />, value: "24/7", label: "AI Analysis" },
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-[#DB00FF] via-[#7E22CE] to-[#00E5FF] shadow-xl my-8">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                            className="glass-panel bg-white/10 border border-white/20 p-8 rounded-3xl flex flex-col items-center justify-center text-center backdrop-blur-md shadow-lg transition-all"
                        >
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: 15, scale: 1.2 }}
                                className="mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                            >
                                {stat.icon}
                            </motion.div>
                            <div className="text-5xl font-normal mb-2 text-white drop-shadow-md tracking-tight">{stat.value}</div>
                            <div className="text-sm font-medium text-white/90 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
