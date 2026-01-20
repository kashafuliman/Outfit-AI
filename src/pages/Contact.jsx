import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, ChevronDown, MessageCircle, HelpCircle, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const faqs = [
        {
            question: 'How does the AI scoring system work?',
            answer: 'Our AI system analyzes multiple aspects of your outfit including color coordination, fit, style trends, and overall aesthetic appeal. The score is calculated based on industry-standard fashion principles and current trends.'
        },
        {
            question: 'Can I upload multiple outfits?',
            answer: 'Yes! You can upload as many outfits as you want. Each outfit will be analyzed separately and you can track your scores over time to monitor your style improvement.'
        },
        {
            question: 'How often does the leaderboard update?',
            answer: 'The leaderboard updates in real-time. As soon as an outfit is analyzed and scored, it appears on the leaderboard based on the rating compared to other users.'
        },
        {
            question: 'What rewards can I earn?',
            answer: 'You can earn badges for consistent high scores, special achievements, and unlock exclusive features. Top performers on the leaderboard also receive monthly recognition.'
        },
        {
            question: 'Is my data secure?',
            answer: 'Yes, we use industry-standard encryption and security measures to protect your data. Your outfits and personal information are never shared without your consent.'
        },
        {
            question: 'Can I compete in specific categories?',
            answer: 'Yes! You can compete in different categories like casual wear, formal wear, streetwear, and seasonal trends. Each category has its own leaderboard.'
        }
    ];

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: 'Email',
            value: 'hello@outfitpowerscore.com',
            color: 'from-pink-500 to-red-500'
        },
        {
            icon: <Phone size={24} />,
            title: 'Phone',
            value: '+1 (555) 123-4567',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <MapPin size={24} />,
            title: 'Location',
            value: 'San Francisco, CA',
            color: 'from-cyan-500 to-blue-500'
        }
    ];

    const socials = [
        { icon: <Instagram size={20} />, handle: '@outfitpowerscore', color: 'from-pink-500 to-purple-500' },
        { icon: <Facebook size={20} />, handle: '@outfitscore', color: 'from-blue-500 to-cyan-500' },
        { icon: <Youtube size={20} />, handle: 'Outfit Power Score', color: 'from-red-500 to-pink-500' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitted(false);
        }, 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    Get in Touch
                </h1>
                <p className="text-lg text-gray-600">
                    Have questions? We're here to help!
                </p>
            </motion.div>

            {/* Contact Form & Info Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            >
                {/* Form */}
                <motion.div
                    variants={itemVariants}
                    className="lg:col-span-2"
                >
                    <div className="glass-panel rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="john@example.com"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="How can we help?"
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell us more about your question or feedback..."
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                {submitted ? 'Message Sent!' : 'Send Message'}
                            </motion.button>

                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm"
                                >
                                    ✓ Thank you! We'll get back to you soon.
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    variants={itemVariants}
                    className="lg:col-span-1 space-y-6"
                >
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                        <div className="space-y-4">
                            {contactInfo.map((info, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 5 }}
                                    className="glass-panel rounded-xl p-4 flex items-center gap-4"
                                >
                                    <div className={`bg-gradient-to-r ${info.color} p-3 rounded-lg text-white`}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">{info.title}</p>
                                        <p className="font-bold text-gray-900">{info.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                        <div className="space-y-2">
                            {socials.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    whileHover={{ x: 5 }}
                                    href="#"
                                    className="glass-panel rounded-xl p-4 flex items-center gap-3 hover:shadow-lg transition-all"
                                >
                                    <div className={`bg-gradient-to-r ${social.color} p-2 rounded-lg text-white`}>
                                        {social.icon}
                                    </div>
                                    <span className="font-medium text-gray-900">{social.handle}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Response Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg"
                    >
                        <MessageCircle size={32} className="mb-3" />
                        <h4 className="font-bold mb-2">Quick Response</h4>
                        <p className="text-sm opacity-90">
                            We typically respond within 24 hours during business days
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto mb-16"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Find answers to common questions about Outfit Power Score</p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            layout
                            className="glass-panel rounded-xl overflow-hidden"
                        >
                            <motion.button
                                onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                                className="w-full px-6 py-4 flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: expandedFAQ === idx ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown size={20} className="text-purple-600" />
                                </motion.div>
                            </motion.button>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: expandedFAQ === idx ? 'auto' : 0,
                                    opacity: expandedFAQ === idx ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-4 text-gray-600 border-t border-gray-200">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Still Have Questions Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 text-center"
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
                <p className="text-gray-700 mb-6">
                    Our support team is always ready to help you get the most out of Outfit Power Score
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                        <MessageCircle size={18} />
                        Chat with Support
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-purple-600 text-purple-600 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
                    >
                        <HelpCircle size={18} />
                        View Help Center
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
