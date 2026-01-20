import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Mail, User, Camera, Settings } from 'lucide-react';

const Profile = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (err) {
            console.error('Failed to log out:', err);
        }
    };

    if (!currentUser) {
        return (
            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Please sign in first</h2>
                    <button
                        onClick={() => navigate('/login')}
                        className="btn-primary px-6 py-3"
                    >
                        Go to Sign In
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel rounded-3xl shadow-2xl overflow-hidden"
                >
                    {/* Header Background */}
                    <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                <User size={48} className="text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="pt-16 pb-8 px-8">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {currentUser.displayName || 'User Profile'}
                            </h1>
                            <p className="text-gray-600 flex items-center justify-center gap-2">
                                <Mail size={16} />
                                {currentUser.email}
                            </p>
                        </div>

                        {/* Profile Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-purple-50 rounded-xl p-6">
                                <h3 className="text-sm font-medium text-gray-600 mb-2">Account Status</h3>
                                <p className="text-lg font-bold text-purple-600">Active</p>
                                <p className="text-xs text-gray-500 mt-2">
                                    Member since {new Date(currentUser.metadata?.creationTime).toLocaleDateString()}
                                </p>
                            </div>

                            <div className="bg-pink-50 rounded-xl p-6">
                                <h3 className="text-sm font-medium text-gray-600 mb-2">Profile Completeness</h3>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-3/4"></div>
                                    </div>
                                    <span className="text-lg font-bold text-pink-600">75%</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 mb-8">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-3 rounded-xl transition-colors"
                            >
                                <Camera size={18} />
                                Change Profile Picture
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-xl transition-colors"
                            >
                                <Settings size={18} />
                                Edit Profile
                            </motion.button>
                        </div>

                        {/* Logout Button */}
                        <motion.button
                            onClick={handleLogout}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-medium py-3 rounded-xl transition-colors border border-red-200"
                        >
                            <LogOut size={18} />
                            Sign Out
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
