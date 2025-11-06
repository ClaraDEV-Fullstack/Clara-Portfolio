'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';
import SectionTitle from '../../components/SectionTitle';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Import icons actually used
import {
    FaJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaGitlab,
    FaFigma, FaSketch, FaAndroid, FaApple, FaCode, FaDatabase, FaServer,
    FaMobileAlt, FaPalette, FaPencilRuler, FaLaptopCode
} from 'react-icons/fa';

import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiBootstrap,
    SiMui, SiRedux, SiLaravel, SiPhp, SiPython, SiDjango,
    SiFirebase, SiPostgresql, SiMysql, SiDart, SiFlutter, SiVercel,
    SiNetlify, SiAdobephotoshop, SiAdobeillustrator, SiCanva,
    SiAffinitydesigner, SiGraphql
} from 'react-icons/si';

// Replace invalid SiZustand with FaCode
const frontendSkills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Material UI", icon: <SiMui className="text-blue-300" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Zustand", icon: <FaCode className="text-purple-500" /> }, // Fixed here
];

const backendSkills = [
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
    { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-600" /> },
    { name: "REST APIs", icon: <FaServer className="text-gray-300" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
];

const mobileSkills = [
    { name: "Dart", icon: <SiDart className="text-blue-400" /> },
    { name: "Flutter", icon: <SiFlutter className="text-cyan-400" /> },
    { name: "iOS Development", icon: <FaApple className="text-gray-200" /> },
    { name: "Android Development", icon: <FaAndroid className="text-green-500" /> },
    { name: "Cross-Platform", icon: <FaMobileAlt className="text-purple-500" /> },
    { name: "Mobile UI/UX", icon: <FaPalette className="text-pink-500" /> },
];

const devOpsSkills = [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
    { name: "GitLab", icon: <FaGitlab className="text-orange-600" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Netlify", icon: <SiNetlify className="text-cyan-400" /> },
];

const designTools = [
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-600" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
    { name: "Sketch", icon: <FaSketch className="text-yellow-500" /> },
    { name: "Canva", icon: <SiCanva className="text-teal-400" /> },
    { name: "Affinity Designer", icon: <SiAffinitydesigner className="text-purple-600" /> },
];

const designSkills = [
    { name: "UI Design", icon: <FaPalette className="text-pink-500" /> },
    { name: "UX Design", icon: <FaPencilRuler className="text-blue-400" /> },
    { name: "Responsive Design", icon: <FaPalette className="text-green-500" /> },
    { name: "Wireframing", icon: <FaPencilRuler className="text-yellow-500" /> },
    { name: "Prototyping", icon: <FaPalette className="text-purple-400" /> },
    { name: "Typography", icon: <FaPalette className="text-red-400" /> },
    { name: "Color Theory", icon: <FaPalette className="text-blue-300" /> },
    { name: "Layout Design", icon: <FaPencilRuler className="text-teal-400" /> },
    { name: "Brand Identity", icon: <FaPalette className="text-indigo-400" /> },
    { name: "Print Design", icon: <FaPencilRuler className="text-orange-400" /> },
    { name: "Logo Design", icon: <FaPalette className="text-yellow-400" /> },
    { name: "Illustration", icon: <FaPencilRuler className="text-green-400" /> },
    { name: "Interaction Design", icon: <FaPalette className="text-pink-400" /> },
];

// Skill card component with animations
const SkillCard = ({ skill, index }: { skill: { name: string, icon: JSX.Element }, index: number }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const animationOptions = [
        "animate__bounceIn",
        "animate__fadeIn",
        "animate__fadeInLeft",
        "animate__fadeInRight",
        "animate__fadeInUp",
        "animate__fadeInDown",
        "animate__zoomIn",
        "animate__slideInLeft",
        "animate__slideInRight",
        "animate__slideInUp",
        "animate__slideInDown",
        "animate__rotateIn",
        "animate__lightSpeedInRight",
        "animate__lightSpeedInLeft",
        "animate__jackInTheBox"
    ];

    const animation = animationOptions[index % animationOptions.length];

    return (
        <motion.div
            ref={ref}
            className={`flex flex-col items-center justify-center p-3 bg-gray-800 rounded-xl border border-gray-700 transition-all duration-300 ${inView ? `animate__animated ${animation}` : 'opacity-0'}`}
            whileHover={{
                y: -5,
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                transition: { duration: 0.3 }
            }}
        >
            <div className="w-14 h-14 flex items-center justify-center text-5xl mb-2">
                {skill.icon}
            </div>
            <span className="text-white text-center text-lg font-medium">{skill.name}</span>
        </motion.div>
    );
};

// Skill category section
const SkillCategory = ({ title, skills }: { title: string, skills: { name: string, icon: JSX.Element }[] }) => {
    return (
        <div className="mb-12">
            <h3 className="text-3xl font-bold text-blue-400 mb-6">{title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                ))}
            </div>
        </div>
    );
};


export default function SkillsPage() {
    return (
        <div className={`${poppins.className} bg-[#0a192f] min-w-full overflow-x-hidden`}>
            <section className="py-20 px-6 md:px-20 w-full">
                <div className="max-w-7xl mx-auto">
                    {/* Enhanced Section Title */}
                    <div className="relative mb-16 text-center">
                        {/* Background decoration */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
                        </div>

                        {/* Main title with gradient text */}
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-white"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            My Skills
                        </motion.h1>

                        {/* Decorative elements */}
                        <div className="flex justify-center items-center space-x-4 mb-4">
                            <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                        </div>

                        {/* Subtitle with animation */}
                        <motion.p
                            className="text-3xl text-white max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Technologies & Tools I Work With
                        </motion.p>


                        {/* Floating skill icons */}
                        <div className="absolute -top-4 left-1/4 opacity-20 animate-bounce">
                            <FaCode className="text-3xl text-blue-400" />
                        </div>
                        <div className="absolute -bottom-4 right-1/4 opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
                            <FaPalette className="text-3xl text-purple-400" />
                        </div>
                    </div>

                    <div className="mt-16">
                        <SkillCategory title="Frontend Development" skills={frontendSkills} />
                        <SkillCategory title="Backend Development" skills={backendSkills} />
                        <SkillCategory title="Mobile Development" skills={mobileSkills} />
                        <SkillCategory title="DevOps & Deployment" skills={devOpsSkills} />
                        <SkillCategory title="Design Tools" skills={designTools} />
                        <SkillCategory title="Design Skills" skills={designSkills} />
                    </div>

                    {/* Skills summary section */}
                    <motion.div
                        className="relative mt-24 bg-gradient-to-br from-blue-50 via-white to-blue-100
  rounded-[2rem] p-10 shadow-[0_0_40px_rgba(59,130,246,0.1)] backdrop-blur-lg
  text-center overflow-hidden max-w-6xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Soft glowing background blend */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-white/40 to-blue-100/30 blur-2xl"></div>

                        {/* Subtle orbs */}
                        <div className="absolute top-0 left-0 w-28 h-28 bg-blue-400/15 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-36 h-36 bg-blue-300/15 rounded-full blur-2xl animate-pulse"></div>

                        {/* Title */}
                        <h3 className="relative text-4xl font-extrabold text-blue-800 mb-9 drop-shadow-md">
                            My <span className="text-blue-600">Expertise</span>
                        </h3>

                        {/* Description */}
                        <motion.p
                            className="relative text-1xl text-black-800 font-medium leading-relaxed mb-10 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            I combine technical precision with a strong sense of design. Every product I build
                            is crafted to be reliable, efficient, and visually appealing — bridging creativity
                            and functionality seamlessly.
                        </motion.p>

                        {/* Skill cards */}
                        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Development */}
                            <motion.div
                                whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(59,130,246,0.2)" }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="bg-white/80 p-6 rounded-xl shadow-md text-center backdrop-blur-md"
                            >
                                <div className="text-blue-600 text-4xl mb-3">
                                    <FaLaptopCode />
                                </div>
                                <h4 className="text-lg font-semibold text-blue-800 mb-2">Development</h4>
                                <p className="relative text-1xl text-black-800 leading-relaxed">
                                    Building full-stack applications with performance and scalability in mind.
                                </p>
                            </motion.div>

                            {/* Design */}
                            <motion.div
                                whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(168,85,247,0.2)" }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="bg-white/80 p-6 rounded-xl shadow-md text-center backdrop-blur-md"
                            >
                                <div className="text-purple-600 text-4xl mb-3">
                                    <FaPalette />
                                </div>
                                <h4 className="text-lg font-semibold text-purple-800 mb-2">Design</h4>
                                <p className="relative text-1xl text-black-800 leading-relaxed">
                                    Crafting modern, user-friendly interfaces that inspire engagement.
                                </p>
                            </motion.div>

                            {/* Integration */}
                            <motion.div
                                whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(56,189,248,0.2)" }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="bg-white/80 p-6 rounded-xl shadow-md text-center backdrop-blur-md"
                            >
                                <div className="text-cyan-600 text-4xl mb-3">
                                    <FaCode />
                                </div>
                                <h4 className="text-lg font-semibold text-cyan-800 mb-2">Integration</h4>
                                <p className="relative text-1xl text-black-800 leading-relaxed">
                                    Connecting creative design concepts with clean, functional code.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}