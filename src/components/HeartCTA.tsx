'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaPaperPlane, FaHeart } from "react-icons/fa";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

export default function HeartCTA() {
    return (
        <div className="flex flex-col items-center mt-32 md:mt-40 lg:mt-52 px-4 mb-0">
            <motion.div
                className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mb-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Animated Heart Background */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <svg
                        viewBox="0 0 100 100"
                        className="w-full h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.9" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <path
                            d="M50 15
                               C35 -10, 0 15, 0 50
                               C0 80, 50 100, 50 100
                               C50 100, 100 80, 100 50
                               C100 15, 65 -10, 50 15 Z"
                            fill="url(#heartGradient)"
                            filter="url(#glow)"
                            className="drop-shadow-lg"
                        />
                    </svg>
                </motion.div>

                {/* Floating Heart Icons */}
                <motion.div
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 text-pink-400 opacity-70"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                >
                    <FaHeart className="text-lg sm:text-xl" />
                </motion.div>

                <motion.div
                    className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-pink-400 opacity-70"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}
                >
                    <FaHeart className="text-base sm:text-lg" />
                </motion.div>

                <motion.div
                    className="absolute top-6 right-6 sm:top-10 sm:right-8 text-pink-400 opacity-50"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
                >
                    <FaHeart className="text-xs sm:text-sm" />
                </motion.div>

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 lg:px-10 text-center">
                    <motion.div
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 md:mb-6 border-2 border-white/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaEnvelope className="text-white text-xl sm:text-2xl md:text-3xl" />
                    </motion.div>

                    <motion.h3
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-2 sm:mb-3 md:mb-4"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Have a Project in Mind?
                    </motion.h3>

                    <motion.p
                        className="text-xs sm:text-sm md:text-base lg:text-lg font-medium max-w-[90%] mx-auto leading-relaxed drop-shadow-md mb-4 sm:mb-6 md:mb-8 text-white/90"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        I'm always excited to hear about new projects and opportunities. Whether you
                        have a question or just want to say hi, feel free to reach out!
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Link href="/contact">
                            <motion.a
                                className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full text-xs sm:text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px rgba(59,130,246,0.4)",
                                    background: "linear-gradient(to right, #4f86f7, #7c7ff0)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                                <FaPaperPlane className="ml-1 sm:ml-2 text-xs sm:text-sm md:text-base" />
                            </motion.a>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Extra bottom spacing so heart doesn't touch footer */}
            <div className="h-32 md:h-40 lg:h-48"></div>
        </div>
    );
}
