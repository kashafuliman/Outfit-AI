import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Upload, Trophy, User, Info, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', icon: <Sparkles size={18} />, active: true },
        { name: 'Upload', icon: <Upload size={18} /> },
        { name: 'How It Works', icon: <Info size={18} /> },
        { name: 'Leaderboard', icon: <Trophy size={18} /> },
        { name: 'Profile', icon: <User size={18} /> },
        { name: 'Contact', icon: <Mail size={18} /> },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
        >
            <div className="container glass-panel rounded-2xl flex items-center justify-between py-3 px-6 shadow-sm">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg text-white">
                        <Sparkles size={24} fill="currentColor" />
                    </div>
                    <span className="text-xl font-medium gradient-text">Outfit Power Score</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={
                                link.name === 'Upload' 
                                    ? '/analyze' 
                                    : link.name === 'Profile' 
                                    ? '/profile' 
                                    : link.name === 'How It Works'
                                    ? '/how-it-works'
                                    : link.name === 'Contact'
                                    ? '/contact'
                                    : link.name === 'Leaderboard'
                                    ? '/leaderboard'
                                    : '/'
                            }
                            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-purple-600 ${link.active ? 'px-4 py-2 bg-purple-100/50 text-purple-700 rounded-full' : 'text-gray-600'
                                }`}
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-3">
                    <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                        Sign In
                    </Link>
                    <Link to="/analyze" className="btn-primary flex items-center gap-2">
                        Try Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 left-4 right-4 glass-panel rounded-xl p-4 md:hidden flex flex-col gap-4 shadow-lg"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={
                                link.name === 'Upload' 
                                    ? '/analyze' 
                                    : link.name === 'Profile' 
                                    ? '/profile' 
                                    : link.name === 'How It Works'
                                    ? '/how-it-works'
                                    : link.name === 'Contact'
                                    ? '/contact'
                                    : link.name === 'Leaderboard'
                                    ? '/leaderboard'
                                    : '/'
                            }
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 text-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                        Sign In
                    </Link>
                    <Link to="/analyze" className="btn-primary w-full mt-2 text-center block">Try Now</Link>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
