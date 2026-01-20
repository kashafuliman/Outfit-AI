import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Trophy, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-40 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-200/30 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 via-purple-100 to-cyan-100 border border-white/50 px-6 py-2 rounded-full mb-8 shadow-sm backdrop-blur-sm"
                >
                    <Sparkles size={16} className="text-purple-600" />
                    <span className="text-base font-medium bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">AI-Powered Fashion Scoring Platform</span>
                </motion.div>

                {/* Headline */}
                <h1 className="text-6xl md:text-8xl font-normal tracking-tight mb-8 flex flex-col items-center leading-tight">
                    <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                        {"Level Up Your".split(" ").map((word, i) => (
                            <span
                                key={i}
                                className="gradient-text-1 pb-2"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {word}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 mt-1 md:mt-2">
                        {"Fashion Game".split(" ").map((word, i) => (
                            <span
                                key={i}
                                className="gradient-text-2 pb-2"
                                style={{ animationDelay: `${i * 0.1 + 0.5}s` }}
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                </h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-gray-600 max-w-2xl mb-10"
                >
                    Upload your outfit and discover your real-time <span className="text-purple-600 font-medium">Power Score</span>
                </motion.p>

                {/* Feature Highlights (Small icons) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-8 mb-12 text-sm font-medium text-gray-500"
                >
                    <div className="flex items-center gap-2">
                        <span className="p-1 bg-red-100 rounded-full text-red-500"><Target size={16} /></span>
                        AI Analysis
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="p-1 bg-amber-100 rounded-full text-amber-500"><Trophy size={16} /></span>
                        Compete
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="p-1 bg-yellow-100 rounded-full text-yellow-500"><Sparkles size={16} /></span>
                        Level Up
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link to="/analyze" className="btn-primary flex items-center gap-2 text-lg px-8 py-3">
                        Try Your Outfit Now <ArrowRight size={20} />
                    </Link>

                    <button className="btn-outline text-lg px-8 py-3 bg-white hover:bg-purple-50">
                        How It Works
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
