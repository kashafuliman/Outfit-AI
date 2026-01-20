import React from 'react';
import { motion } from 'framer-motion';
import { Target, Palette, Flame, Sparkles } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Target className="w-8 h-8 text-white" />,
            color: "from-pink-500 to-rose-500",
            title: "Confidence Level",
            desc: "AI analyzes your posture and body language"
        },
        {
            icon: <Palette className="w-8 h-8 text-white" />,
            color: "from-purple-500 to-indigo-500",
            title: "Color Balance",
            desc: "Perfect harmony in hues and contrast"
        },
        {
            icon: <Flame className="w-8 h-8 text-white" />,
            color: "from-teal-400 to-emerald-500",
            title: "Trend Alignment",
            desc: "Stay on top of viral fashion trends"
        },
        {
            icon: <Sparkles className="w-8 h-8 text-white" />,
            color: "from-fuchsia-500 to-purple-600",
            title: "Uniqueness",
            desc: "Celebrate your creative expression"
        }
    ];

    return (
        <section className="py-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-normal mb-4">Why Outfit Power Score?</h2>
                    <p className="text-gray-600">Four AI-powered dimensions to elevate your style</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className={`absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r ${feature.color}`} />

                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-md text-white`}
                            >
                                {feature.icon}
                            </motion.div>

                            <h3 className="text-xl font-normal mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
