'use client';

import { motion } from 'framer-motion';
import { FaReact, FaServer, FaMobile, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import 'animate.css';

const services = [
    {
        icon: FaReact,
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-50 group-hover:bg-blue-100',
        accent: 'from-blue-500/10 to-blue-600/5',
        title: 'Frontend Development',
        description: 'Creating responsive, interactive web interfaces with modern frameworks',
    },
    {
        icon: FaServer,
        iconColor: 'text-green-600',
        iconBg: 'bg-green-50 group-hover:bg-green-100',
        accent: 'from-green-500/10 to-green-600/5',
        title: 'Backend Development',
        description: 'Building secure, scalable server-side solutions and robust APIs',
    },
    {
        icon: FaMobile,
        iconColor: 'text-purple-600',
        iconBg: 'bg-purple-50 group-hover:bg-purple-100',
        accent: 'from-purple-500/10 to-purple-600/5',
        title: 'Mobile Development',
        description: 'Developing cross-platform mobile apps with native performance',
    },
];

export default function CreativeServicesSection() {
    return (
        <section className="py-10 md:py-20 px-2 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-100/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-6 sm:mb-10 md:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 animate__animated animate__fadeInDown">
                        My Services
                    </h2>

                    <motion.div
                        className="h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mt-3"
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />

                    <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-xl text-blue-950/80 max-w-2xl mx-auto leading-relaxed animate__animated animate__fadeInUp px-2">
                        Specialized development services tailored to your needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.article
                                key={service.title}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                whileHover={{ y: -6 }}
                                className="group relative bg-white rounded-lg sm:rounded-2xl border border-blue-100/80 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="relative z-10 flex flex-col items-center text-center p-2 sm:p-6 md:p-8 min-h-0 sm:min-h-[220px] h-full">
                                    <div className={`p-1.5 sm:p-3 md:p-4 rounded-lg sm:rounded-2xl ${service.iconBg} transition-colors duration-300 mb-2 sm:mb-5`}>
                                        <Icon className={`text-xl sm:text-4xl md:text-5xl ${service.iconColor}`} />
                                    </div>

                                    <h3 className="text-[10px] sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-3 leading-tight line-clamp-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-[9px] sm:text-sm md:text-base text-gray-600 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none max-w-xs">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center mt-6 sm:mt-10 md:mt-14"
                >
                    <Link
                        href="/services"
                        className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-7 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.03] text-xs sm:text-sm md:text-base"
                    >
                        <span>See All Services</span>
                        <span className="flex items-center justify-center p-1.5 bg-white/20 rounded-full group-hover:translate-x-0.5 transition-transform duration-300">
                            <FaArrowRight className="text-sm" />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
