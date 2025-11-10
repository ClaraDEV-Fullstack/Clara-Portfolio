'use client';

import { motion, Variants } from 'framer-motion';
import { Poppins, Montserrat } from 'next/font/google';
import { FaGraduationCap, FaBriefcase, FaAward, FaCertificate, FaLightbulb, FaUsers, FaChartLine, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import 'animate.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'] });

// Define types for our data structures
type CareerItem = {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    type: string;
};

type CareerData = {
    academic: CareerItem[];
    experience: CareerItem[];
    training: CareerItem[];
};

type Section = {
    id: keyof CareerData;
    title: string;
    icon: JSX.Element;
    color: string;
};

export default function CareerPage() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const fadeIn: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const slideInLeft: Variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const slideInRight: Variants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    // Enhanced animation variants for timeline items
    const timelineItemVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
            }
        }),
    };

    // Enhanced animation for section headers
    const sectionHeaderVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
    };

    // Animation for text elements
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut"
            }
        },
    };

    // Grouped and sorted career data
    const careerData: CareerData = {
        academic: [
            {
                year: '2022-2023',
                title: 'MBA in Logistics and Supply Chain',
                subtitle: 'IUGET, Bonamoussadi',
                description: 'Focused on strategic management, logistics optimization, and efficient supply chain systems.',
                type: 'academic'
            },
            {
                year: '2021',
                title: 'Bachelor\'s Degree - Management Sciences\'',
                subtitle:'IUC – Institute Universitaire de la Côte',
                description: 'Built strong analytical and leadership foundations with emphasis on organizational management.',
                type: 'academic'
            },
            {
                year: '2019-2020',
                title: 'HND in Human Resource Management',
                subtitle: 'IUC – Institute Universitaire de la Côte',
                description: 'Developed expertise in employee relations, recruitment, and workplace management strategies.',
                type: 'academic'
            },
            {
                year: '2018',
                title: 'GCE Advanced Level',
                subtitle: 'Business Studies',
                description: 'Completed advanced secondary education with a strong foundation in management and business principles.',
                type: 'academic'
            }
        ],
        experience: [
            {
                year: '2024 - Present',
                title: 'Full-Stack Web & Mobile Developer (AI-Integrated Projects)',
                subtitle: 'High Tech Vocational Center',
                description:
                    'Gaining hands-on experience in building and deploying scalable full-stack web and mobile applications using modern frameworks such as Django, Flutter, React, and Next.js. Actively integrating AI-based solutions including chatbots, analytics, and intelligent UI systems into real-world projects.',
                type: 'Professional Training & Real Project Experience'
            },
            {
                year: '2023 - 2024',
                title: 'Graphic Designer & Assistant Manager',
                subtitle: 'Awambong Private Company',
                description:
                    'Managed creative design projects and digital marketing visuals while assisting in administrative operations, procurement, and client coordination. Strengthened skills in visual storytelling, team collaboration, and brand presentation.',
                type: 'Work Experience'
            },
        ],

        training: [
            {
                year: '2024 - 2025',
                title: 'Full-Stack Web & Mobile Development',
                subtitle: 'High Tech Vocational Center',
                description:
                    'Comprehensive training in full-stack development with practical implementation of AI-enhanced web and mobile apps. Focus areas include REST API integration, user interface optimization, responsive design, and cloud deployment using modern technologies.',
                type: 'Technical Training & Development'
            },
            {
                year: '2022 - 2023',
                title: 'Graphic Design & Branding',
                subtitle: 'Multicolor – Printing & Design Center',
                description:
                    'Learned professional graphic design, layout composition, and digital/industrial printing techniques. Gained strong foundations in branding, logo design, and creative digital media production.',
                type: 'Creative Training'
            },
        ]

    };

    // Section configuration
    const sections: Section[] = [
        {
            id: 'academic',
            title: 'Academic Background',
            icon: <FaGraduationCap className="text-white text-xl" />,
            color: 'from-blue-600 to-blue-800'
        },
        {
            id: 'experience',
            title: 'Professional Experience',
            icon: <FaBriefcase className="text-white text-xl" />,
            color: 'from-green-600 to-green-800'
        },
        {
            id: 'training',
            title: 'Professional Training',
            icon: <FaCertificate className="text-white text-xl" />,
            color: 'from-purple-600 to-purple-800'
        }
    ];

    return (
        <section className={`${poppins.className} bg-gradient-to-br from-gray-900 to-black min-h-screen text-white py-6 px-3 md:py-10 md:px-6 relative overflow-hidden`}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center mb-8 md:mb-12 relative z-10"
            >
                <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-800 mb-4 md:mb-6 shadow-lg"
                    variants={textVariants}
                >
                    <FaGraduationCap className="text-white text-2xl md:text-3xl" />
                </motion.div>

                <motion.h1
                    className={`${montserrat.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent`}
                    variants={textVariants}
                >
                    Career Journey
                </motion.h1>
                <motion.p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-medium px-2" variants={textVariants}>
                    My path through education, professional experience, and continuous skill development
                </motion.p>
            </motion.div>

            <div className="w-[98%] md:w-[95%] mx-auto">
                {/* Main Content - Full Width Layout */}
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
                    {/* Left Column - Image and Quote (30% width) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInLeft}
                        className="lg:w-[30%] flex flex-col items-center"
                    >
                        {/* Curved Image Container */}
                        <div className="relative w-full mb-6 md:mb-8">
                            <div className="relative overflow-hidden rounded-[50%_50%_0%_0%] w-full aspect-[3/4]">
                                <Image
                                    src="/images/aboutpic.jpg"
                                    alt="Professional portrait"
                                    fill
                                    className="object-cover w-full h-full scale-110 transition-transform duration-700 ease-in-out"
                                    style={{
                                        objectPosition: "center top",
                                    }}
                                    priority
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 rounded-full blur-xl"></div>
                            <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 rounded-full blur-xl"></div>

                            {/* Floating badges */}
                            <motion.div
                                className="absolute top-4 right-4 md:top-6 md:right-6 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                3+ Years Experience
                            </motion.div>

                            <motion.div
                                className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                Multidisciplinary
                            </motion.div>
                        </div>


                        {/* Quote Section - Moved under image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full"
                        >
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-4 md:p-6 border border-gray-700">
                                <p className="text-base md:text-lg lg:text-xl text-gray-300 font-medium italic text-center">
                                    "Education built my foundation; experience shaped my creativity and resilience.
                                    Together, they form the cornerstone of my professional journey."
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Career Timeline (70% width) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInRight}
                        className="lg:w-[70%]"
                    >
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl border border-gray-700">

                            {/* Render each section */}
                            {sections.map((section: Section, sectionIndex: number) => (
                                <motion.div
                                    key={section.id}
                                    className="mb-8 md:mb-12"
                                    variants={sectionHeaderVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: sectionIndex * 0.2 }}
                                >
                                    {/* Section Title */}
                                    <div className="flex items-center mb-6 md:mb-8">
                                        <motion.div
                                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center mr-4 md:mr-6 animate__animated animate__pulse animate__infinite animate__slower`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {section.icon}
                                        </motion.div>
                                        <h2 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white`}>
                                            {section.title}
                                        </h2>
                                    </div>

                                    {/* Timeline */}
                                    <div className="relative">
                                        {/* Vertical line */}
                                        <div className={`absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b ${section.color}`}></div>

                                        <div className="space-y-8 md:space-y-12">
                                            {careerData[section.id].map((item: CareerItem, index: number) => (
                                                <motion.div
                                                    key={index}
                                                    custom={index}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    variants={timelineItemVariants}
                                                    className="relative pl-20 md:pl-24"
                                                >
                                                    {/* Timeline dot */}
                                                    <motion.div
                                                        className={`absolute left-6 md:left-8 top-6 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br ${section.color} shadow-lg z-10 flex items-center justify-center animate__animated animate__bounceIn`}
                                                        style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                                                    >
                                                        {item.type === 'academic' && <FaAward className="text-white text-xs" />}
                                                        {item.type === 'experience' && <FaBriefcase className="text-white text-xs" />}
                                                        {item.type === 'training' && <FaCertificate className="text-white text-xs" />}
                                                    </motion.div>

                                                    {/* Year badge */}
                                                    <motion.div
                                                        className="absolute left-0 top-4 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg z-20 animate__animated animate__fadeInLeft"
                                                        style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                                                    >
                                                        {item.year}
                                                    </motion.div>

                                                    {/* Content */}
                                                    <motion.div
                                                        className="bg-amber-50 rounded-xl p-4 md:p-6 border border-amber-200 mt-4 animate__animated animate__fadeInUp"
                                                        style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                                                    >
                                                        <h3 className={`${montserrat.className} text-xl md:text-2xl font-bold text-gray-900 mb-2`}>
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-amber-700 font-semibold text-base md:text-lg mb-3">
                                                            {item.subtitle}
                                                        </p>
                                                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                                            {item.description}
                                                        </p>
                                                    </motion.div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}