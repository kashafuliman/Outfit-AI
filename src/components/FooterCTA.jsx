import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Sparkles } from 'lucide-react';

const FooterCTA = () => {
    return (
        <section className="py-20 pb-32">
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#DB00FF] via-[#7E22CE] to-[#00E5FF] shadow-2xl p-10 md:p-16 text-center mx-auto max-w-5xl"
                >
                    {/* Decorative icons */}
                    <div className="absolute top-10 right-10 text-white/20 animate-pulse">
                        <Zap size={48} fill="currentColor" />
                    </div>
                    <div className="absolute bottom-10 left-10 text-white/20 animate-bounce">
                        <Sparkles size={32} fill="currentColor" />
                    </div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-8"
                        >
                            <Zap size={64} className="text-white mx-auto mb-6" />
                            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                                Ready to Score Your Style?
                            </h2>
                            <p className="text-purple-100 text-xl max-w-2xl mx-auto mb-10">
                                Join thousands of fashion lovers competing for the top spot
                            </p>
                        </motion.div>

                        <Link
                            to="/analyze"
                            className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-block"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FooterCTA;
