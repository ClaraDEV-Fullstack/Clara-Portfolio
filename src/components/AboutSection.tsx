'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    FaGraduationCap,
    FaCrown,
} from 'react-icons/fa';
import { getAcademicCredentials, getProfessionalExperience } from '@/data/career';

export default function AboutSection() {
    const education = getAcademicCredentials();
    const experience = getProfessionalExperience();

    return (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">

                    {/* Left Column: Image & Milestones */}
                    <div className="space-y-15">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative flex items-center justify-center"
                        >
                            <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[500px] rounded-[60px] md:rounded-[100px] overflow-hidden border-2 border-gray-700 shadow-2xl">
                                <Image
                                    src="/images/aboutpic.jpg"
                                    alt="Clara - Full Stack Developer"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                    {/* Right Column: Profile, Experience, Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8 lg:sticky lg:top-8"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaCrown className="text-yellow-500 text-2xl" />
                                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                    Professional Profile
                                </h2>
                            </div>
                            <p className="text-gray-300 text-base leading-relaxed">
                                I bridge the gap between <span className="text-blue-400 font-bold">Business Strategy</span> and <span className="text-yellow-400 font-bold">Technical Execution</span>. With an MBA background and Full-Stack expertise, I build software that doesn't just work—it solves problems.
                            </p>
                        </div>

                        {/* Experience Highlights */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white border-l-4 border-blue-500 pl-3">Professional Experience</h3>
                            {experience.map((item, index) => (
                                <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white text-lg">{item.title}</h4>
                                        <span className="text-[10px] bg-blue-500 text-white px-2 py-1 rounded-md font-bold uppercase tracking-tighter">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="text-sm text-yellow-500 font-medium mb-2">{item.subtitle}</p>
                                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Education Chips */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white border-l-4 border-purple-500 pl-3">Academic Background</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {education.map((edu, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-gray-800/40 p-3 rounded-xl border border-gray-700">
                                        <FaGraduationCap className="text-purple-400 text-xl" />
                                        <div>
                                            <p className="text-xs text-white font-bold">{edu.title}</p>
                                            <p className="text-[10px] text-gray-400">{edu.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}