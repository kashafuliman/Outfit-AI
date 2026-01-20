import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Check, Upload, Zap, Trophy, Share2, ArrowRight, ChevronLeft, ChevronRight, Pause } from 'lucide-react';

const HowItWorks = () => {
    const [hoveredStep, setHoveredStep] = useState(null);
    const [currentDemoStep, setCurrentDemoStep] = useState(0);
    const [isPlayingDemo, setIsPlayingDemo] = useState(true);

    const demoSteps = [
        {
            title: 'Step 1: Sign Up or Login',
            description: 'Create your free account or login to access all features of Outfit Power Score',
            icon: '👤',
            color: 'from-blue-400 to-blue-600',
            tips: ['Quick signup process', 'Secure account', 'Multiple login options']
        },
        {
            title: 'Step 2: Upload Your Outfit',
            description: 'Take a photo of your outfit or upload an image from your device. Make sure the entire outfit is visible.',
            icon: '📸',
            color: 'from-purple-400 to-purple-600',
            tips: ['Clear, well-lit photos', 'Full body view', 'Multiple angles optional']
        },
        {
            title: 'Step 3: Get Your Score',
            description: 'Our AI analyzes your outfit and provides a detailed score with tips for improvement within seconds',
            icon: '⭐',
            color: 'from-yellow-400 to-yellow-600',
            tips: ['Instant analysis', 'Detailed feedback', 'Improvement suggestions']
        },
        {
            title: 'Step 4: Check Leaderboard',
            description: 'View how your score compares to others and compete globally. Earn badges and climb the rankings!',
            icon: '🏆',
            color: 'from-pink-400 to-pink-600',
            tips: ['Global rankings', 'Earn badges', 'Compete with friends']
        }
    ];

    useEffect(() => {
        if (!isPlayingDemo) return;
        const timer = setInterval(() => {
            setCurrentDemoStep((prev) => (prev + 1) % demoSteps.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isPlayingDemo, demoSteps.length]);

    const nextDemoStep = () => {
        setCurrentDemoStep((prev) => (prev + 1) % demoSteps.length);
        setIsPlayingDemo(false);
    };

    const prevDemoStep = () => {
        setCurrentDemoStep((prev) => (prev - 1 + demoSteps.length) % demoSteps.length);
        setIsPlayingDemo(false);
    };

    const steps = [
        {
            icon: <Upload className="w-8 h-8" />,
            title: 'Upload Your Outfit',
            description: 'Take a photo of your outfit or upload an existing image from your device. The image should clearly show your complete outfit.'
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'AI Analysis',
            description: 'Our advanced AI analyzes your outfit for style, color coordination, fit, and current trends. This takes just a few seconds.'
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: 'Get Your Score',
            description: 'Receive a detailed Outfit Power Score with ratings on different aspects. See how your outfit ranks compared to other users.'
        },
        {
            icon: <Share2 className="w-8 h-8" />,
            title: 'Share & Compete',
            description: 'Share your results with friends, compete on the leaderboard, and track your style improvement over time.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const rotateVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                variants={rotateVariants}
                animate="animate"
                className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            ></motion.div>
            <motion.div
                variants={rotateVariants}
                animate="animate"
                transition={{ duration: 10, delay: 2 }}
                className="absolute bottom-10 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            ></motion.div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative z-10"
            >
                <motion.h1
                    variants={floatingVariants}
                    animate="animate"
                    className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                >
                    How It Works
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                    Get your outfit analyzed in minutes. Follow these simple steps to discover your Outfit Power Score.
                </motion.p>
            </motion.div>

            {/* Interactive Demo Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-6xl mx-auto mb-16 relative z-10"
            >
                <div className="mb-12 text-center">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">
                        📺 Interactive Tutorial
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See how easy it is to get started with Outfit Power Score
                    </p>
                </div>

                {/* Interactive Demo Player */}
                <motion.div
                    whileHover={{ shadow: "0 50px 100px -20px rgba(0,0,0,0.3)" }}
                    className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-purple-300"
                    style={{ minHeight: "520px" }}
                >
                    {/* Animated Border Glow */}
                    <motion.div
                        animate={{ 
                            boxShadow: [
                                "inset 0 0 30px rgba(168, 85, 247, 0.3)",
                                "inset 0 0 60px rgba(236, 72, 153, 0.3)",
                                "inset 0 0 30px rgba(168, 85, 247, 0.3)"
                            ]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                    />

                    {/* Animated Gradient Background */}
                    <motion.div
                        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-20"
                        style={{ backgroundSize: "200% 200%" }}
                    />
                    
                    {/* Base Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />

                    {/* Floating Sparkle Particles */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`spark-${i}`}
                            animate={{
                                y: [Math.random() * 500, Math.random() * -100],
                                x: [Math.random() * 500, Math.random() * 100],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: i * 0.3
                            }}
                            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                        />
                    ))}

                    {/* Floating Background Orbs */}
                    <motion.div
                        animate={{ 
                            y: [0, -40, 0], 
                            x: [0, 15, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-25"
                    />
                    <motion.div
                        animate={{ 
                            y: [0, 40, 0], 
                            x: [0, -15, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-3xl opacity-25"
                    />

                    {/* Rotating Ring Animation */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, linear: true }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-transparent border-t-purple-400 border-r-pink-400 rounded-full opacity-10"
                    />

                    {/* Step Display Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentDemoStep}
                            initial={{ opacity: 0, x: 100, rotateY: 90 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            exit={{ opacity: 0, x: -100, rotateY: -90 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10"
                        >
                            {/* Step Number Badge */}
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.15, 1], 
                                    rotate: [0, 8, -8, 0],
                                    boxShadow: [
                                        "0 0 20px rgba(168, 85, 247, 0.4)",
                                        "0 0 40px rgba(236, 72, 153, 0.6)",
                                        "0 0 20px rgba(168, 85, 247, 0.4)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold mb-8 shadow-2xl relative z-20"
                            >
                                {currentDemoStep + 1}
                            </motion.div>

                            {/* Animated Glow Circle Behind Icon */}
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-48 h-48 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-30 absolute" />
                            </motion.div>

                            {/* Large Icon */}
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 15, -15, 0],
                                    y: [0, -15, 0]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-9xl mb-6 drop-shadow-2xl relative z-20"
                            >
                                {demoSteps[currentDemoStep].icon}
                            </motion.div>

                            {/* Animated Line Separator */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.2 }}
                                className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"
                            />
                            
                            {/* Title */}
                            <motion.h3 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4 relative z-20"
                            >
                                {demoSteps[currentDemoStep].title}
                            </motion.h3>
                            
                            {/* Description */}
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed relative z-20"
                            >
                                {demoSteps[currentDemoStep].description}
                            </motion.p>

                            {/* Tips Pills */}
                            <motion.div 
                                className="flex gap-3 flex-wrap justify-center relative z-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {demoSteps[currentDemoStep].tips.map((tip, idx) => (
                                    <motion.span
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.3, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ 
                                            delay: 0.4 + idx * 0.12,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                        whileHover={{ 
                                            scale: 1.08, 
                                            y: -5,
                                            boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-gradient-to-r from-white to-gray-50 rounded-full text-sm font-semibold text-gray-700 shadow-md border-2 border-purple-200 hover:shadow-lg transition-all cursor-default relative overflow-hidden group"
                                    >
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                                        />
                                        <span className="relative">✓ {tip}</span>
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <motion.button
                        onClick={prevDemoStep}
                        whileHover={{ scale: 1.2, x: -8, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                        whileTap={{ scale: 0.85 }}
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-4 shadow-2xl transition-all z-20 group hover:scale-120"
                    >
                        <motion.div animate={{ x: [-2, 2, -2] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            <ChevronLeft size={28} />
                        </motion.div>
                    </motion.button>

                    <motion.button
                        onClick={nextDemoStep}
                        whileHover={{ scale: 1.2, x: 8, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                        whileTap={{ scale: 0.85 }}
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-4 shadow-2xl transition-all z-20 group hover:scale-120"
                    >
                        <motion.div animate={{ x: [2, -2, 2] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            <ChevronRight size={28} />
                        </motion.div>
                    </motion.button>

                    {/* Play/Pause Button */}
                    <motion.button
                        onClick={() => setIsPlayingDemo(!isPlayingDemo)}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ boxShadow: isPlayingDemo ? "0 0 20px rgba(168, 85, 247, 0.6)" : "0 0 20px rgba(236, 72, 153, 0.6)" }}
                        className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-4 shadow-2xl hover:shadow-2xl transition-all z-20 group"
                    >
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                            {isPlayingDemo ? (
                                <Pause size={24} />
                            ) : (
                                <Play size={24} />
                            )}
                        </motion.div>
                    </motion.button>

                    {/* Step Indicator Dots */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-full z-20 shadow-lg border border-purple-200">
                        {demoSteps.map((_, idx) => (
                            <motion.button
                                key={idx}
                                onClick={() => {
                                    setCurrentDemoStep(idx);
                                    setIsPlayingDemo(false);
                                }}
                                whileHover={{ scale: 1.5 }}
                                animate={{
                                    scale: currentDemoStep === idx ? 1.6 : 1,
                                    boxShadow: currentDemoStep === idx 
                                        ? "0 0 30px rgba(168, 85, 247, 0.8)" 
                                        : "0 0 0px rgba(0,0,0,0)"
                                }}
                                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                                    currentDemoStep === idx 
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Step Counter and Progress */}
                <motion.div 
                    className="mt-10 flex flex-col items-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.p 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-2xl font-bold"
                    >
                        Step <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{currentDemoStep + 1}</span> of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{demoSteps.length}</span>
                    </motion.p>
                    <div className="w-80 h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full overflow-hidden shadow-md">
                        <motion.div
                            animate={{ width: `${((currentDemoStep + 1) / demoSteps.length) * 100}%` }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg relative overflow-hidden"
                        >
                            <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Steps Section */}
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12 text-gray-900"
                >
                    Four Simple Steps
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            onMouseEnter={() => setHoveredStep(index)}
                            onMouseLeave={() => setHoveredStep(null)}
                            className="glass-panel rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Animated Background */}
                            <motion.div
                                animate={{ opacity: hoveredStep === index ? 0.1 : 0 }}
                                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:opacity-10"
                            ></motion.div>

                            {/* Step Number */}
                            <motion.div
                                animate={{ scale: hoveredStep === index ? 1.2 : 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="flex justify-center mb-4 relative z-10"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {index + 1}
                                </div>
                            </motion.div>

                            {/* Icon */}
                            <motion.div
                                animate={{
                                    y: hoveredStep === index ? [0, -5, 0] : 0,
                                    scale: hoveredStep === index ? 1.1 : 1
                                }}
                                transition={{ duration: 0.5 }}
                                className="flex justify-center mb-4 text-purple-600 relative z-10"
                            >
                                {step.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                                {step.description}
                            </p>

                            {/* Arrow Indicator */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 text-purple-500"
                                >
                                    <ArrowRight size={24} />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Features Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-panel rounded-2xl p-8 mb-16 relative overflow-hidden"
                >
                    {/* Animated Background Gradient */}
                    <motion.div
                        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                        style={{ backgroundSize: "200% 200%" }}
                    ></motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">
                        Why Choose Outfit Power Score?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        {[
                            { title: 'AI-Powered Analysis', desc: 'Advanced machine learning algorithms analyze every aspect of your outfit' },
                            { title: 'Real-Time Scoring', desc: 'Get instant feedback on your style with detailed metrics' },
                            { title: 'Community Leaderboard', desc: 'Compete with friends and the global community' },
                            { title: 'Track Progress', desc: 'Monitor your style improvement over time with detailed history' }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="flex gap-4 group"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, delay: idx * 0.2, repeat: Infinity }}
                                >
                                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                </motion.div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white overflow-hidden group"
                >
                    {/* Animated Background Circles */}
                    <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-white opacity-0 rounded-full group-hover:opacity-10 blur-2xl"
                    ></motion.div>

                    <motion.h3
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-2xl font-bold mb-3 relative z-10"
                    >
                        Ready to Get Started?
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 opacity-90 relative z-10"
                    >
                        Upload your first outfit and see your Outfit Power Score in seconds
                    </motion.p>
                    <motion.a
                        href="/analyze"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300 relative z-10 cursor-pointer"
                    >
                        Try Now
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default HowItWorks;
