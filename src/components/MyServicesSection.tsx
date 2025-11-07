'use client';

import { motion } from 'framer-motion';
import { FaReact, FaServer, FaMobile, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function CreativeServicesSection() {
    const services = [
        {
            icon: <FaReact className="text-3xl sm:text-5xl text-blue-600" />,
            title: "Frontend Development",
            description: "Creating responsive, interactive web interfaces with modern frameworks"
        },
        {
            icon: <FaServer className="text-3xl sm:text-5xl text-green-600" />,
            title: "Backend Development",
            description: "Building secure, scalable server-side solutions and robust APIs"
        },
        {
            icon: <FaMobile className="text-3xl sm:text-5xl text-purple-600" />,
            title: "Mobile Development",
            description: "Developing cross-platform mobile apps with native performance"
        }
    ];

    return (
        <section className="py-4 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
            <div className="max-w-[95%] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-4"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">My Services</h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
                        Specialized development services tailored to your needs
                    </p>
                </motion.div>

                {/* Creative Services Display */}
                <div className="relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center my-2">
                    {/* Central circle - hidden on mobile */}
                    <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-blue-200 flex items-center justify-center backdrop-blur-sm bg-white/80">
                        <div className="text-center p-2 sm:p-4">
                            <div className="text-4xl sm:text-6xl text-blue-500 mb-1 sm:mb-2">
                                <FaReact />
                            </div>
                            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1">Development</h3>
                            <p className="text-gray-600 text-sm">Solutions</p>
                        </div>
                    </div>

                    {/* Service bubbles - arranged in a grid for mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 w-full">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="bg-white p-3 sm:p-6 rounded-2xl border border-blue-100 shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-2 sm:p-3 bg-blue-50 rounded-full mb-2 sm:mb-3">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* See All Services Arrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center mt-2"
                >
                    <Link href="/services" className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                        <span className="text-sm font-medium">See All Services</span>
                        <motion.div
                            className="p-1 sm:p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors"
                            whileHover={{ x: 5 }}
                        >
                            <FaArrowRight className="text-sm" />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>

            {/* Add animate.css animations */}
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translate3d(0, 20px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
            `}</style>
        </section>
    );
}