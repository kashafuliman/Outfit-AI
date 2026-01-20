import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, Flame, TrendingUp, Award, Filter } from 'lucide-react';

const Leaderboard = () => {
    const [timeFilter, setTimeFilter] = useState('week');

    const leaders = [
        {
            rank: 2,
            name: "@Taha",
            score: 91,
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
            badge: <Medal className="text-gray-400" fill="currentColor" size={24} />,
            category: 'Casual',
            streak: 12
        },
        {
            rank: 1,
            name: "@Kashaf",
            score: 94,
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            badge: <Trophy className="text-yellow-400" fill="currentColor" size={32} />,
            category: 'Formal',
            streak: 18
        },
        {
            rank: 3,
            name: "@Fatima",
            score: 89,
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
            badge: <Medal className="text-amber-700" fill="currentColor" size={24} />,
            category: 'Streetwear',
            streak: 10
        }
    ];

    const topPlayers = [
        { rank: 4, name: '@Ahmed', score: 87, category: 'Casual', streak: 8 },
        { rank: 5, name: '@Sarah', score: 85, category: 'Formal', streak: 6 },
        { rank: 6, name: '@Maya', score: 83, category: 'Streetwear', streak: 5 },
        { rank: 7, name: '@Hassan', score: 81, category: 'Casual', streak: 4 },
        { rank: 8, name: '@Leila', score: 79, category: 'Formal', streak: 3 }
    ];

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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-20 overflow-hidden bg-white">
            <div className="container text-center">
                <div className="mb-12">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wide mb-4 inline-block shadow-lg shadow-orange-500/30"
                    >
                        This Week's Leaders
                    </motion.span>
                    <h2 className="text-4xl font-normal mb-3">Top Creators</h2>
                    <p className="text-gray-500">Join the competition and claim your spot</p>
                </div>

                {/* Time Filter */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center gap-3 mb-12 flex-wrap"
                >
                    <Filter size={18} className="text-gray-600" />
                    {['week', 'month', 'all'].map((filter) => (
                        <motion.button
                            key={filter}
                            onClick={() => setTimeFilter(filter)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-full font-medium transition-all ${
                                timeFilter === filter
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {filter === 'week' ? 'This Week' : filter === 'month' ? 'This Month' : 'All Time'}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Top 3 Leaders */}
                <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-8 pb-10 mb-16">
                    {leaders.map((leader, idx) => (
                        <motion.div
                            key={leader.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            className={`relative bg-white rounded-3xl p-6 shadow-xl flex flex-col items-center transition-all ${leader.rank === 1
                                ? 'w-full md:w-80 order-1 md:order-2 border-2 border-yellow-400 shadow-yellow-200 z-10 -mt-10 mb-10 md:mb-12 py-10 bg-gradient-to-b from-yellow-50 to-white'
                                : 'w-full md:w-64 order-2 md:order-1 border border-gray-100'
                                }`}
                        >
                            <div className="relative">
                                <div className={`absolute -top-4 -right-2 bg-white rounded-full p-1 shadow-md z-10`}>
                                    {leader.badge}
                                </div>
                                <img
                                    src={leader.img}
                                    alt={leader.name}
                                    className={`rounded-full object-cover border-4 ${leader.rank === 1 ? 'w-32 h-32 border-yellow-300' : 'w-24 h-24 border-gray-100'
                                        }`}
                                />
                                <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${leader.rank === 1 ? 'bg-yellow-400' :
                                    leader.rank === 2 ? 'bg-gray-400' : 'bg-amber-700'
                                    }`}>
                                    #{leader.rank}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mt-8 mb-2 text-gray-800">{leader.name}</h3>

                            {/* Category Badge */}
                            <motion.span
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-xs bg-purple-100 text-purple-600 font-bold px-3 py-1 rounded-full mb-3"
                            >
                                {leader.category}
                            </motion.span>

                            <div className="flex items-center gap-2">
                                <Crown size={18} className={leader.rank === 1 ? 'text-yellow-500' : 'text-gray-400'} fill={leader.rank === 1 ? 'currentColor' : 'none'} />
                                <span className={`text-2xl font-bold ${leader.rank === 1 ? 'text-pink-600' : 'text-purple-600'
                                    }`}>{leader.score}</span>
                            </div>

                            <span className="text-xs text-gray-400 mt-1 uppercase tracking-wide">Power Score</span>

                            {/* Streak */}
                            <div className="mt-4 flex items-center gap-1 text-orange-500">
                                <Flame size={16} fill="currentColor" />
                                <span className="text-sm font-bold">{leader.streak} day streak</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Extended Leaderboard */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="max-w-2xl mx-auto glass-panel rounded-2xl p-8 shadow-xl"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <TrendingUp className="text-purple-600" />
                        <h3 className="text-xl font-bold text-gray-900">Top Players</h3>
                    </div>

                    <div className="space-y-3">
                        {topPlayers.map((player, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + idx * 0.1 }}
                                whileHover={{ x: 5 }}
                                className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                                        className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm"
                                    >
                                        {player.rank}
                                    </motion.div>
                                    <div className="text-left">
                                        <p className="font-bold text-gray-900">{player.name}</p>
                                        <p className="text-xs text-gray-600">{player.category}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1 text-orange-500">
                                        <Flame size={14} fill="currentColor" />
                                        <span className="text-sm font-bold">{player.streak}</span>
                                    </div>
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.1 }}
                                        className="text-right"
                                    >
                                        <p className="font-bold text-purple-600">{player.score}</p>
                                        <p className="text-xs text-gray-500">Score</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full mt-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                    >
                        View Full Leaderboard
                    </motion.button>
                </motion.div>

                {/* Achievement Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"
                >
                    {[
                        { icon: <Award size={32} />, label: 'Competitions', value: '2,547' },
                        { icon: <Trophy size={32} />, label: 'Total Winners', value: '1,283' },
                        { icon: <Flame size={32} />, label: 'Active Streaks', value: '567' }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="glass-panel rounded-xl p-6 text-center"
                        >
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                                className="flex justify-center mb-3 text-purple-600"
                            >
                                {stat.icon}
                            </motion.div>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Leaderboard;
