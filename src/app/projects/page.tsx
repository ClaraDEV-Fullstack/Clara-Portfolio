'use client';

import { useState, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Card, CardContent } from "../../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import 'animate.css';
import { projects, type Project, type ProjectStatus } from "@/data/projects";
import BetBotProCaseStudy from "@/components/BetBotProCaseStudy";
import GodOfMarketCaseStudy from "@/components/GodOfMarketCaseStudy";
import VyraloCaseStudy from "@/components/VyraloCaseStudy";
import ProjectImageLightbox, { type LightboxImage } from "@/components/projects/ProjectImageLightbox";
import ProjectThumbnail from "@/components/projects/ProjectThumbnail";

// Dynamic imports for icons to reduce bundle size
const FaGithub = dynamic(() => import("react-icons/fa").then(mod => mod.FaGithub));
const FaExternalLinkAlt = dynamic(() => import("react-icons/fa").then(mod => mod.FaExternalLinkAlt));
const FaCode = dynamic(() => import("react-icons/fa").then(mod => mod.FaCode));
const FaDatabase = dynamic(() => import("react-icons/fa").then(mod => mod.FaDatabase));
const FaReact = dynamic(() => import("react-icons/fa").then(mod => mod.FaReact));
const FaPython = dynamic(() => import("react-icons/fa").then(mod => mod.FaPython));
const SiNextdotjs = dynamic(() => import("react-icons/si").then(mod => mod.SiNextdotjs));
const SiTailwindcss = dynamic(() => import("react-icons/si").then(mod => mod.SiTailwindcss));
const SiTypescript = dynamic(() => import("react-icons/si").then(mod => mod.SiTypescript));
const SiMysql = dynamic(() => import("react-icons/si").then(mod => mod.SiMysql));
const SiFirebase = dynamic(() => import("react-icons/si").then(mod => mod.SiFirebase));
const SiDjango = dynamic(() => import("react-icons/si").then(mod => mod.SiDjango));
const SiLaravel = dynamic(() => import("react-icons/si").then(mod => mod.SiLaravel));
const SiDocker = dynamic(() => import("react-icons/si").then(mod => mod.SiDocker));

// --- Toast Component (Simple & Lightweight) ---
const Toast = ({ message, show }: { message: string, show: boolean }) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 50, x: '-50%' }}
                    className="fixed bottom-10 left-1/2 z-50 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl border border-yellow-500/50 flex items-center gap-3 w-max max-w-[90vw]"
                >
                    <span className="text-xl">🚧</span>
                    <span className="text-sm font-medium">{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Map technology names to icons
const getTechIcon = (tech: string) => {
    const iconMap: Record<string, JSX.Element> = {
        "React": <FaReact className="text-cyan-400" />,
        "Next.js": <SiNextdotjs className="text-gray-200" />,
        "TypeScript": <SiTypescript className="text-blue-500" />,
        "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
        "Django": <SiDjango className="text-green-600" />,
        "Python": <FaPython className="text-yellow-400" />,
        "MySQL": <SiMysql className="text-blue-400" />,
        "PostgreSQL": <FaDatabase className="text-blue-600" />,
        "MongoDB": <FaDatabase className="text-green-500" />,
        "Node.js": <FaCode className="text-green-500" />,
        "Express": <FaCode className="text-gray-300" />,
        "JavaScript": <FaCode className="text-yellow-300" />,
        "API Integration": <FaCode className="text-purple-400" />,
        "Chart.js": <FaCode className="text-red-400" />,
        "Geolocation": <FaCode className="text-blue-300" />,
        "Socket.io": <FaCode className="text-gray-400" />,
        "Stripe": <FaCode className="text-purple-500" />,
        "Redux": <FaCode className="text-purple-400" />,
        "Firebase": <SiFirebase className="text-yellow-500" />,
        "REST APIs": <FaCode className="text-blue-400" />,
        "Flutter": <FaCode className="text-blue-400" />,
        "Laravel": <SiLaravel className="text-red-500" />,
        "Inertia.js": <FaCode className="text-purple-400" />,
        "Docker": <SiDocker className="text-blue-500" />
    };

    return iconMap[tech] || <FaCode className="text-gray-400" />;
};

export default function ProjectsPage() {
    const [filter, setFilter] = useState<"all" | "featured" | ProjectStatus>("all");
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [previewImage, setPreviewImage] = useState<LightboxImage | null>(null);

    const closePreview = useCallback(() => setPreviewImage(null), []);

    const openProjectPreview = (project: Project) =>
        setPreviewImage({ src: project.image, alt: project.title, caption: project.title });

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(project => project.status === filter || (filter === "featured" && project.featured));

    // Helper function to get animation class based on index
    const getAnimationClass = (index: number) => {
        const animations = [
            'animate__fadeInLeft',
            'animate__fadeInRight',
            'animate__fadeInDown',
            'animate__zoomIn',
            'animate__bounceIn',
            'animate__rotateIn',
            'animate__lightSpeedInRight',
            'animate__slideInLeft',
            'animate__slideInRight',
            'animate__slideInUp',
            'animate__slideInDown'
        ];
        return animations[index % animations.length];
    };

    const handleDemoClick = (project: Project) => {
        if (project.demoUrl && project.demoUrl !== "#") {
            window.open(project.demoUrl, "_blank");
            return;
        }
        if (project.isPrivate) {
            setToastMessage("Private client project — no public demo available.");
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            return;
        }
        setToastMessage("Demo is currently being deployed. Check back soon!");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative">

            {/* Custom Toast Notification */}
            <Toast message={toastMessage} show={showToast} />

            <AnimatePresence>
                {previewImage && (
                    <ProjectImageLightbox image={previewImage} onClose={closePreview} />
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-center mb-12 md:mb-16 px-4 sm:px-6 lg:px-0"
                >
                    {/* Decorative spoke graphic */}
                    <div className="text-center relative mb-8 md:mb-12 w-full max-w-5xl mx-auto px-4">
                        {/* Animated circular glow behind the heading */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-tr from-cyan-400/20 via-blue-500/10 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                        </div>

                        {/* Heading with subtle spin ring */}
                        <div className="relative inline-block">
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="w-16 h-16 md:w-24 md:h-24 border-4 border-cyan-300/30 rounded-full animate-spin-slow"></div>
                            </div>
                            <h2 className="relative text-2xl md:text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-blue-600 tracking-tight drop-shadow-md">
                                My Projects
                            </h2>
                        </div>

                        {/* Section Description - Enhanced for mobile */}
                        <div className="mt-4 md:mt-5 text-sm md:text-base lg:text-xl text-blue-100/90 max-w-full px-4 md:px-8 lg:px-16 mx-auto leading-relaxed">
                            <div className="max-w-md md:max-w-xl lg:max-w-3xl mx-auto">
                                <span className="font-semibold text-yellow-400">AI-driven</span> full-stack applications
                                <span className="block md:inline mt-1 md:mt-0"> blending innovation with robust development</span>
                            </div>
                        </div>

                        {/* Section Description - Second Part */}
                        <div className="mt-2 md:mt-4 text-sm md:text-base lg:text-xl text-blue-100/90 max-w-full px-4 md:px-8 lg:px-16 mx-auto leading-relaxed">
                            <div className="max-w-lg md:max-w-md lg:max-w-5xl mx-auto">
                                <span className="block md:inline">Each project showcases </span>
                                <span className="font-semibold text-yellow-400">real-world solutions</span>
                                <span className="block md:inline mt-1 md:mt-0"> with intelligent design and scalable architecture</span>
                            </div>
                        </div>

                        {/* Decorative underline */}
                        <div className="mt-4 md:mt-6 flex justify-center">
                            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
                    {["all", "featured", "Completed", "In Progress", "Planning Phase"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setFilter(item as "all" | "featured" | ProjectStatus)}
                            className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                                filter === item ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                        >
                            {item === "all" ? "All Projects" : item}
                        </button>
                    ))}
                </div>

                {/* Projects Grid — equal-width columns, uniform card heights */}
                <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 md:gap-8 items-stretch w-full">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.3}}
                            transition={{duration: 0.5, delay: index * 0.15}}
                            whileHover={{y: -5}}
                            className={`group animate__animated h-full w-full min-w-0 ${getAnimationClass(index)}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <Card
                                className="overflow-hidden bg-white border-gray-200 w-full h-full md:min-h-[480px] flex flex-col shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/20"
                            >
                                <ProjectThumbnail
                                    src={project.image}
                                    alt={project.title}
                                    status={project.status}
                                    onClick={() => openProjectPreview(project)}
                                />

                                {/* Content */}
                                <CardContent className="p-2.5 sm:p-4 md:p-5 flex-1 flex flex-col space-y-1.5 sm:space-y-2 md:space-y-3">
                                    <div className="flex justify-between items-start gap-1 sm:gap-2 mb-1 md:min-h-[3.5rem]">
                                        <h3 className="text-xs sm:text-lg md:text-xl font-bold text-black line-clamp-2">{project.title}</h3>
                                        {project.featured && (
                                            <span className="shrink-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                                                Featured
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-black text-[11px] sm:text-sm md:text-base mb-1 sm:mb-2 md:mb-3 flex-1 line-clamp-2 sm:line-clamp-3 md:min-h-[4.5rem]">
                                        {project.description}
                                    </p>

                                    <div>
                                        <h4 className="hidden sm:block text-xs md:text-sm font-semibold text-black mb-1 md:mb-2">Technologies:</h4>
                                        <div className="flex flex-wrap gap-1 md:gap-2">
                                            {project.technologies.slice(0, 4).map((tech, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-0.5 sm:gap-1 bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition"
                                                >
                                                    <span className="text-[10px] sm:text-xs md:text-sm">{getTechIcon(tech)}</span>
                                                    <span className="text-[9px] sm:text-xs font-medium text-black hidden sm:inline">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row justify-between mt-auto gap-1.5 sm:gap-2 pt-1">
                                        {/* View Demo Button - Modified */}
                                        <button
                                            onClick={() => handleDemoClick(project)}
                                            className={`flex items-center gap-1 md:gap-2 px-2 sm:px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-medium justify-center flex-1 text-center transition-all duration-300
                                                ${(project.demoUrl && project.demoUrl !== "#")
                                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105 active:scale-95"
                                                : "bg-gray-200 text-gray-500 cursor-pointer hover:bg-gray-300 border border-gray-300 active:scale-95"
                                            }`}
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            <span className="hidden sm:inline">
                                                {(project.demoUrl && project.demoUrl !== "#")
                                                    ? "Live Demo"
                                                    : project.isPrivate
                                                    ? "Private Project"
                                                    : "Deployment"}
                                            </span>
                                            <span className="sm:hidden">
                                                {(project.demoUrl && project.demoUrl !== "#")
                                                    ? "Demo"
                                                    : project.isPrivate
                                                    ? "Private"
                                                    : "Deploy"}
                                            </span>
                                        </button>

                                        {project.caseStudyAnchor ? (
                                            <motion.div
                                                className="flex-1"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Link
                                                    href={`#${project.caseStudyAnchor}`}
                                                    className="flex items-center gap-1 md:gap-2 px-2 sm:px-3 py-1.5 md:px-4 md:py-2 bg-gray-200 text-black rounded-lg text-[10px] sm:text-xs md:text-sm font-medium justify-center w-full text-center hover:bg-gray-300 transition"
                                                >
                                                    <FaCode className="text-xs" />
                                                    <span className="hidden sm:inline">Case Study</span>
                                                    <span className="sm:hidden">Study</span>
                                                </Link>
                                            </motion.div>
                                        ) : (
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 md:gap-2 px-2 sm:px-3 py-1.5 md:px-4 md:py-2 bg-gray-200 text-black rounded-lg text-[10px] sm:text-xs md:text-sm font-medium justify-center flex-1 text-center"
                                                whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FaGithub className="text-xs" />
                                                <span>GitHub</span>
                                            </motion.a>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <BetBotProCaseStudy />
                <GodOfMarketCaseStudy />
                <VyraloCaseStudy />

                {/* CTA */}
                <motion.div className="mt-16 md:mt-20 text-center"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">More Projects Coming Soon</h3>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-6 md:mb-8 px-4">
                        I'm currently working on several exciting projects including NextSkill-Hub and new AI-powered tools.
                        Stay tuned!
                    </p>
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium text-sm md:text-base">
                        <FaCode/>
                        <span>Check Back for Updates</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}