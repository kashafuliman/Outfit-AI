import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Shirt, Briefcase, PartyPopper, GraduationCap, Heart, Sparkles, Check, AlertCircle, RefreshCw, ArrowLeft } from 'lucide-react';

const Analyze = () => {
    const [selectedContext, setSelectedContext] = useState('Casual');
    const [selectedImage, setSelectedImage] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState(null);
    const [simulatedError, setSimulatedError] = useState(false); // For testing "Invalid Image" scenarios
    const [isDragging, setIsDragging] = useState(false);

    const fileInputRef = React.useRef(null);

    const startAnalysis = () => {
        if (!selectedImage) return;

        setAnalyzing(true);
        setResult(null);

        // Simulate Detailed AI Analysis with Random Scenarios for Testing
        setTimeout(() => {
            setAnalyzing(false);

            if (simulatedError) {
                setResult({
                    type: 'error',
                    title: "No Clear Outfit Detected",
                    message: "Our AI couldn't identify a clear full-body outfit in this image. It might be too abstract, dark, or not contain a person.",
                    tips: ["Ensure the full outfit is visible", "Avoid dark or blurry photos", "Stand against a contrasting background"]
                });
                return;
            }

            // Define Scenarios
            const scenarios = [
                {
                    type: "high",
                    confidence: {
                        score: 92,
                        checks: [
                            { label: "Head Position", status: "pass", message: "Perfectly aligned" },
                            { label: "Back Posture", status: "pass", message: "Straight and confident" },
                            { label: "Shoulder Alignment", status: "pass", message: "Level and relaxed" },
                            { label: "Arm Position", status: "pass", message: "Natural flow" }
                        ],
                        tips: ["You look confident! Keep doing what you're doing."]
                    },
                    suitability: {
                        score: 95,
                        pros: ["Perfect match for the occasion", "Colors complement skin tone", "Great fit"],
                        cons: ["None! This is a solid look."]
                    },
                    mistakes: [],
                    improvements: ["Maybe add a bold watch for extra flair", "Smile more!"],
                    shopping: [
                        { name: "Premium Silk Tie", brand: "Gucci", description: "Luxury accessory", price: "$180.00", link: "https://gucci.com", image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&q=80&w=300" },
                        { name: "Oxford Shoes", brand: "Allen Edmonds", description: "Classic leather", price: "$395.00", link: "https://allenedmonds.com", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80&w=300" }
                    ]
                },
                {
                    type: "medium", // The original one
                    confidence: {
                        score: 78,
                        checks: [
                            { label: "Head Position", status: "pass", message: null },
                            { label: "Back Posture", status: "pass", message: null },
                            { label: "Shoulder Alignment", status: "warning", message: "Slight shoulder slouch detected" },
                            { label: "Arm Position", status: "warning", message: "Arms held too close to body" }
                        ],
                        tips: [
                            "Relax your shoulders and pull them back slightly",
                            "Take a wider, more natural stance",
                            "Let your arms hang naturally at your sides"
                        ]
                    },
                    suitability: {
                        score: 85,
                        pros: [
                            "Colors are appropriate for party wear",
                            "Overall style matches the context well",
                            "Good balance between comfort and presentation"
                        ],
                        cons: [
                            "Shoes might be slightly too formal for casual setting",
                            "Consider weather-appropriate adjustments"
                        ]
                    },
                    mistakes: [
                        { issue: "Pants slightly long - creases visible at ankle", severity: "medium" },
                        { issue: "Too many accessories competing for attention", severity: "high" },
                        { issue: "Weak color contrast between top & shoes", severity: "low" }
                    ],
                    improvements: [
                        "Try a cropped jacket to balance proportions",
                        "Replace black shoes with white sneakers for better contrast",
                        "Add a statement belt to define waist and add structure",
                        "Consider rolling up sleeves for a more relaxed vibe",
                        "Adjust lighting in photos for stronger presence"
                    ],
                    shopping: [
                        { name: "Slim Fit Blazer", brand: "Zara", description: "Perfect for smart casual looks", price: "$89.90", link: "https://zara.com", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=300" },
                        { name: "Wide Leg Trousers", brand: "H&M", description: "Beige color, comfortable fit", price: "$49.99", link: "https://hm.com", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=300" },
                        { name: "White Leather Sneakers", brand: "Nike", description: "Classic style, versatile", price: "$110.00", link: "https://nike.com", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=300" }
                    ]
                },
                {
                    type: "low",
                    confidence: {
                        score: 62,
                        checks: [
                            { label: "Head Position", status: "fail", message: "Looking down" },
                            { label: "Back Posture", status: "warning", message: "Slouched" },
                            { label: "Shoulder Alignment", status: "fail", message: "Uneven shoulders" },
                            { label: "Arm Position", status: "pass", message: "Okay" }
                        ],
                        tips: ["Chin up! Looking down lowers perceived confidence.", "Straighten your back against a wall to practice."]
                    },
                    suitability: {
                        score: 45,
                        matches: [],
                        mismatches: [],
                        pros: ["Good effort on color matching"],
                        cons: ["Outfit is too casual for 'Wedding' context", "Jeans are not appropriate"]
                    },
                    mistakes: [
                        { issue: "Undefined waistline details", severity: "high" },
                        { issue: "Wrinkled fabric indicates poor fit", severity: "medium" }
                    ],
                    improvements: [
                        "Switch jeans for chinos or slacks",
                        "Iron your shirt!",
                        "Tuck in your shirt for a cleaner line"
                    ],
                    shopping: [
                        { name: "Formal Suit", brand: "Hugo Boss", description: "Investment piece", price: "$595.00", link: "https://hugoboss.com", image: "https://images.unsplash.com/photo-1594938298603-c8148c47e356?auto=format&fit=crop&q=80&w=300" }
                    ]
                }
            ];

            // ALWAYS select the "Medium" scenario (Index 1) unless simulatedError is true
            const randomResult = scenarios[1];
            // const randomResult = scenarios[Math.floor(Math.random() * scenarios.length)];
            setResult(randomResult);

        }, 3000);
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setResult(null); // Reset result on new image
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setResult(null);
        }
    };

    const contexts = [
        { id: 'Casual', icon: <Shirt size={24} />, label: 'Casual', color: 'bg-blue-500' },
        { id: 'Office', icon: <Briefcase size={24} />, label: 'Office', color: 'bg-slate-600' },
        { id: 'Party', icon: <PartyPopper size={24} />, label: 'Party', color: 'bg-pink-500' },
        { id: 'College', icon: <GraduationCap size={24} />, label: 'College', color: 'bg-purple-500' },
        { id: 'Wedding', icon: <Heart size={24} />, label: 'Wedding', color: 'bg-red-500' },
    ];

    return (
        <div className="container py-20 pt-32 min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                    Upload & Analyze Your Outfit
                </h1>
                <p className="text-gray-600 text-lg">
                    Get detailed AI-powered feedback on posture, style, and improvements
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Upload & Preview Section */}
                <div className="flex flex-col gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => !selectedImage && fileInputRef.current.click()}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center transition-all group h-[500px] relative overflow-hidden ${selectedImage
                            ? 'border-purple-500 bg-gray-900 cursor-default'
                            : isDragging
                                ? 'border-purple-500 bg-purple-100 scale-[1.02] cursor-copy'
                                : 'border-purple-200 bg-purple-50/50 hover:border-purple-400 cursor-pointer'
                            }`}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileSelect}
                        />

                        {selectedImage ? (
                            <>
                                <img src={selectedImage} alt="Uploaded outfit" className="absolute inset-0 w-full h-full object-cover" />
                                {analyzing && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                                        <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                                        <h3 className="text-3xl font-medium text-white mb-2 animate-pulse">Analyzing Style...</h3>
                                        <p className="text-purple-200 text-lg">Checking posture, fit & colors</p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Upload className="text-white w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-800 mb-2">Upload Your Outfit Photo</h3>
                                <p className="text-gray-500 mb-6">Drag and drop or click to select</p>
                                <span className="text-xs text-purple-400 font-medium uppercase tracking-wide bg-white px-3 py-1 rounded-full shadow-sm">
                                    Supports: JPG, PNG, WEBP
                                </span>
                            </>
                        )}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">Click to Change</span>
                        </div>
                    </motion.div>

                    {selectedImage && (
                        <button
                            onClick={() => fileInputRef.current.click()}
                            disabled={analyzing}
                            className="w-full bg-white border-2 border-purple-200 text-purple-600 font-medium text-lg py-3 rounded-2xl hover:border-purple-400 hover:bg-purple-50 transition-all shadow-sm"
                        >
                            Change Photo
                        </button>
                    )}
                </div>

                {/* Results & Context Selection */}
                <div className="flex flex-col gap-6 h-full">
                    {!result ? (
                        <>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/50 shadow-sm"
                            >
                                <h3 className="text-2xl font-medium text-gray-800 mb-2">Select Context</h3>
                                <p className="text-gray-500 mb-8">Where are you planning to wear this outfit?</p>

                                <div className="space-y-4">
                                    {contexts.map((ctx) => (
                                        <motion.div
                                            key={ctx.id}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setSelectedContext(ctx.id)}
                                            className={`p-4 rounded-2xl border-2 flex items-center gap-4 cursor-pointer transition-all ${selectedContext === ctx.id
                                                ? 'border-purple-500 bg-purple-50 shadow-sm'
                                                : 'border-gray-100 hover:border-purple-200 bg-white'
                                                }`}
                                        >
                                            <div className={`w-12 h-12 rounded-xl ${ctx.color} flex items-center justify-center text-white shadow-md`}>
                                                {ctx.icon}
                                            </div>
                                            <span className="text-lg font-medium text-gray-700 flex-1">{ctx.label}</span>
                                            {selectedContext === ctx.id && (
                                                <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white">
                                                    <Check size={16} />
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Simulation Toggle for Prototype */}
                            <div className="flex items-center justify-end gap-2 px-2">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Test Mode:</span>
                                <div className="flex bg-gray-100 rounded-lg p-1">
                                    <button
                                        onClick={() => setSimulatedError(false)}
                                        className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${!simulatedError ? 'bg-white text-green-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        Valid
                                    </button>
                                    <button
                                        onClick={() => setSimulatedError(true)}
                                        className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${simulatedError ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        Invalid
                                    </button>
                                </div>
                            </div>

                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={startAnalysis}
                                disabled={analyzing || !selectedImage}
                                className={`w-full text-white font-medium text-xl py-5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 ${analyzing || !selectedImage
                                    ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                                    : 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:shadow-xl hover:shadow-purple-200'
                                    }`}
                            >
                                {analyzing ? (
                                    <>
                                        <Sparkles size={24} className="animate-spin" /> Analyzing...
                                    </>
                                ) : selectedImage ? (
                                    <>
                                        <Sparkles size={24} /> Analyze My Outfit
                                    </>
                                ) : (
                                    <>
                                        <ArrowLeft size={24} className="animate-pulse" /> Upload Outfit Photo
                                    </>
                                )}
                            </motion.button>
                        </>
                    ) : result.type === 'error' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-red-50/50 backdrop-blur-sm rounded-[2.5rem] p-8 border border-red-100 h-full flex flex-col items-center justify-center text-center shadow-lg"
                        >
                            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-500 shadow-inner">
                                <AlertCircle size={48} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-3">{result.title}</h3>
                            <p className="text-gray-600 mb-8 max-w-md text-lg leading-relaxed">{result.message}</p>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 w-full max-w-sm text-left mb-8">
                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                    <Sparkles size={16} className="text-red-400" /> Tips for Best Results:
                                </h4>
                                <ul className="space-y-3">
                                    {result.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-300 flex-shrink-0" />
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={() => {
                                    setResult(null);
                                    // Optionally trigger file input again?
                                    // fileInputRef.current.click();
                                }}
                                className="flex items-center gap-2 px-8 py-3 bg-white text-red-600 font-semibold rounded-xl border-2 border-red-100 hover:border-red-300 hover:bg-red-50 transition-all shadow-sm group"
                            >
                                <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                                Try Another Photo
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6 overflow-y-auto max-h-[800px] pr-2 custom-scrollbar pb-10"
                        >
                            {/* 1. Confidence Score */}
                            <div className="bg-white/80 p-6 rounded-3xl border border-pink-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-pink-500"></div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium text-gray-800">1. Confidence Score (Posture AI)</h3>
                                            <p className="text-sm text-gray-500">Analysis of your body language and posture</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-4xl font-bold text-pink-600">{result.confidence.score}</span>
                                        <span className="text-sm text-gray-500 block">/ 100</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 mb-6">
                                    {result.confidence.checks.map((check, i) => (
                                        <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 ${check.status === 'pass' ? 'bg-green-50 border-green-200' : check.status === 'fail' ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'}`}>
                                            <div className={`flex-shrink-0 ${check.status === 'pass' ? 'text-green-600' : check.status === 'fail' ? 'text-red-600' : 'text-yellow-600'}`}>
                                                {check.status === 'pass' ? <Check size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-[10px] font-bold">!</div>}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 text-sm">{check.label}</h4>
                                                {check.message && <p className="text-xs text-gray-600 mt-1">{check.message}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-pink-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-pink-700 mb-2 flex items-center gap-2">
                                        <Sparkles size={16} /> Tips to Improve Confidence:
                                    </h4>
                                    <ul className="space-y-2">
                                        {result.confidence.tips.map((tip, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                <span className="text-pink-400">→</span> {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* 2. Outfit Suitability */}
                            <div className="bg-white/80 p-6 rounded-3xl border border-purple-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-500"></div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-white">
                                            <Shirt size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium text-gray-800">2. Outfit Suitability</h3>
                                            <p className="text-sm text-gray-500">How well your outfit matches the context</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-4xl font-bold text-purple-600">{result.suitability.score}%</span>
                                        <span className="text-sm text-gray-500 block">Match</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                                        <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                                            <Check size={18} /> What Works:
                                        </h4>
                                        <ul className="space-y-2">
                                            {result.suitability.pros.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                                                    <span className="mt-1">✓</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                                        <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full border-2 border-current flex items-center justify-center text-[10px] font-bold">!</div> Consider:
                                        </h4>
                                        <ul className="space-y-2">
                                            {result.suitability.cons.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-orange-700">
                                                    <span className="mt-1 font-bold">✕</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Mistakes Detected */}
                            <div className="bg-white/80 p-6 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500"></div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white">
                                        <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center font-bold">!</div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">3. Mistakes Detected</h3>
                                        <p className="text-sm text-gray-500">Specific fashion issues identified by AI</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {result.mistakes.map((mistake, i) => (
                                        <div key={i} className={`p-4 rounded-xl flex items-center gap-4 ${mistake.severity === 'high' ? 'bg-red-50 border border-red-100' :
                                            mistake.severity === 'medium' ? 'bg-orange-50 border border-orange-100' :
                                                'bg-yellow-50 border border-yellow-100'
                                            }`}>
                                            <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${mistake.severity === 'high' ? 'bg-red-200 text-red-700' :
                                                mistake.severity === 'medium' ? 'bg-orange-200 text-orange-700' :
                                                    'bg-yellow-200 text-yellow-700'
                                                }`}>
                                                {mistake.severity}
                                            </span>
                                            <span className="text-gray-700 font-medium text-sm flex-1">• {mistake.issue}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 4. Improvement Suggestions */}
                            <div className="bg-white/80 p-6 rounded-3xl border border-teal-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500"></div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">4. Improvement Suggestions</h3>
                                        <p className="text-sm text-gray-500">Actionable tips to elevate your style</p>
                                    </div>
                                </div>

                                <div className="bg-teal-50/50 rounded-2xl p-6 border border-teal-100">
                                    <h4 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">Recommended Improvements:</h4>
                                    <ul className="space-y-4">
                                        {result.improvements.map((imp, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                                                <div className="mt-0.5 text-teal-600">
                                                    <Check size={18} />
                                                </div>
                                                {imp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Shopping Section */}
                            <div className="bg-yellow-50/80 p-6 rounded-3xl border border-yellow-200 shadow-sm">
                                <div className="flex items-center gap-2 mb-2 text-yellow-800">
                                    <Briefcase size={20} />
                                    <h3 className="font-bold">Shop Similar Items:</h3>
                                </div>
                                <p className="text-sm text-yellow-700 mb-6">Based on your outfit analysis, here are some items you might like:</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {result.shopping.map((item, i) => (
                                        <div key={i} className="bg-white p-4 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow relative group">
                                            <div className="flex gap-4">

                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                                    <p className="text-purple-600 text-sm font-bold mb-1">{item.brand}</p>
                                                    <p className="text-xs text-gray-500 mb-3">{item.description}</p>
                                                    <button className="text-xs font-semibold text-yellow-600 hover:text-yellow-700 flex items-center gap-1">
                                                        View Similar <span className="text-lg leading-3">→</span>
                                                    </button>
                                                </div>
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0"></a>
                                            </div>
                                            <div className="absolute top-4 right-4 text-gray-300 group-hover:text-yellow-400 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Analyze;
