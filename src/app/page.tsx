'use client';

import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';
import { FaGithub, FaLinkedin, FaTwitter, FaBehance, FaArrowRight, FaCode, FaPalette, FaLaptopCode, FaMobile, FaCheck, FaStar } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss, SiPython, SiDjango } from 'react-icons/si';
import Link from 'next/link';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700', '800'],
});

export default function HomePage() {
    // Animation variants
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    // Featured projects data
    const featuredProjects = [
        {
            id: 1,
            title: "Future Expense Tracker",
            description: "A comprehensive expense tracking application with budget management and financial insights.",
            technologies: ["Django", "Python", "MySQL"],
            image: "/images/expense-tracker.jpg",
            status: "In Progress"
        },
        {
            id: 2,
            title: "React Django Full-Stack App",
            description: "A modern web application combining React frontend with Django backend.",
            technologies: ["React", "Django", "PostgreSQL"],
            image: "/images/react-django-app.jpg",
            status: "Planning Phase"
        },
        {
            id: 3,
            title: "E-commerce Platform",
            description: "A full-featured online shopping platform with cart and payment integration.",
            technologies: ["Next.js", "TypeScript", "Stripe"],
            image: "/images/ecommerce-platform.jpg",
            status: "Completed"
        }
    ];

    // Testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "CEO, TechStart",
            content: "Clara delivered an exceptional e-commerce platform that exceeded our expectations. Her attention to detail and technical expertise were impressive.",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Product Manager, InnovateCo",
            content: "Working with Clara was a pleasure. She transformed our complex requirements into a user-friendly application that our customers love.",
            rating: 5
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Marketing Director, BrandPlus",
            content: "Clara's design skills combined with her development knowledge created a perfect solution for our brand. Highly recommended!",
            rating: 5
        }
    ];

    // Services data
    const services = [
        {
            id: 1,
            title: "Frontend Development",
            icon: <FaCode className="text-blue-400 text-2xl" />,
            description: "Creating responsive, interactive web interfaces with modern frameworks."
        },
        {
            id: 2,
            title: "Backend Development",
            icon: <FaLaptopCode className="text-green-400 text-2xl" />,
            description: "Building secure, scalable server-side applications and APIs."
        },
        {
            id: 3,
            title: "UI/UX Design",
            icon: <FaPalette className="text-purple-400 text-2xl" />,
            description: "Designing intuitive and visually appealing user experiences."
        },
        {
            id: 4,
            title: "Mobile Development",
            icon: <FaMobile className="text-yellow-400 text-2xl" />,
            description: "Developing cross-platform mobile applications with Flutter."
        }
    ];

    // Skills data
    const skills = [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Python", icon: <SiPython className="text-yellow-400" /> },
        { name: "Django", icon: <SiDjango className="text-green-600" /> },
        { name: "JavaScript", icon: <FaCode className="text-yellow-300" /> },
        { name: "TypeScript", icon: <FaCode className="text-blue-500" /> },
        { name: "UI/UX Design", icon: <FaPalette className="text-pink-500" /> }
    ];

    return (
        <div className={`${poppins.className} bg-gradient-to-br from-gray-900 to-black text-white min-h-screen overflow-x-hidden`}>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full">
                            <span className="text-blue-400 font-medium">Full-Stack Developer & UI/UX Designer</span>
                        </div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Crafting <span className="text-blue-400">Digital</span> <br />
                            <span className="text-yellow-400">Experiences</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-300 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            I'm Clara, a passionate full-stack developer and UI/UX designer with expertise in creating
                            modern web applications and engaging user experiences. I transform ideas into digital realities.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <Link href="/projects" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all flex items-center gap-2">
                                View My Work <FaArrowRight />
                            </Link>
                            <Link href="/contact" className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-500/10 transition-all">
                                Get In Touch
                            </Link>
                        </motion.div>

                        <motion.div
                            className="flex gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <a href="https://github.com/ClaraDEV-Fullstack" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaGithub className="text-2xl" />
                            </a>
                            <a href="https://linkedin.com/in/clara-beri-794097217/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a href="https://behance.net/claraberi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaBehance className="text-2xl" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden border-2 border-gray-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                    <span className="text-4xl font-bold text-white">CB</span>
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-blue-400">3+</div>
                                        <div className="text-sm text-gray-300">Years Experience</div>
                                    </div>
                                    <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-yellow-400">15+</div>
                                        <div className="text-sm text-gray-300">Projects Completed</div>
                                    </div>
                                    <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-green-400">10+</div>
                                        <div className="text-sm text-gray-300">Happy Clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h3 className="text-3xl font-bold text-blue-400">My Journey</h3>
                            <p className="text-lg text-gray-300">
                                My journey began with a Master's degree in Logistics and Supply Chain Management, but I soon discovered my passion for creativity and digital design.
                                I pursued graphic design training while working in a startup, where I quickly grew into a multi-role contributor handling design, production, and supply chain operations.
                            </p>
                            <p className="text-lg text-gray-300">
                                Driven by a desire to expand my skill set, I enrolled in an intensive full-stack and mobile development course. Today, I combine my design expertise with development skills to create
                                comprehensive digital solutions that are both visually appealing and technically robust.
                            </p>
                            <p className="text-lg text-gray-300">
                                I'm passionate about continuous learning and integrating AI into my workflow to build smarter, more efficient applications.
                            </p>
                            <Link href="/about" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                Learn More About Me <FaArrowRight />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-6 rounded-xl border border-blue-700/30">
                                <div className="text-blue-400 text-3xl mb-4">
                                    <FaCode />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Development</h4>
                                <p className="text-gray-300">Full-stack web and mobile applications with modern technologies</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-6 rounded-xl border border-purple-700/30">
                                <div className="text-purple-400 text-3xl mb-4">
                                    <FaPalette />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Design</h4>
                                <p className="text-gray-300">UI/UX design with focus on user experience and visual appeal</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-6 rounded-xl border border-green-700/30">
                                <div className="text-green-400 text-3xl mb-4">
                                    <FaLaptopCode />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Integration</h4>
                                <p className="text-gray-300">Combining design and development for seamless solutions</p>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 p-6 rounded-xl border border-yellow-700/30">
                                <div className="text-yellow-400 text-3xl mb-4">
                                    <FaMobile />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Innovation</h4>
                                <p className="text-gray-300">Exploring AI and emerging technologies for future-ready applications</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">My Services</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                            I offer a comprehensive range of services to help bring your digital ideas to life
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={fadeInUp}
                                className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/10"
                                whileHover={{ y: -10 }}
                            >
                                <div className="mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center mt-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all">
                            View All Services <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                            Technologies and tools I specialize in
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center border border-gray-700 hover:border-blue-500/30 transition-all"
                                whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                            >
                                <div className="text-3xl mb-3">
                                    {skill.icon}
                                </div>
                                <span className="text-center text-gray-300">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center mt-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Link href="/skills" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all">
                            View All Skills <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                            A selection of my recent work
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {featuredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={fadeInUp}
                                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/10"
                                whileHover={{ y: -10 }}
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            project.status === "Completed" ? "bg-green-500" :
                                                project.status === "In Progress" ? "bg-yellow-500" : "bg-blue-500"
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0">
                                        <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href={`/projects/${project.id}`} className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                                        View Project <FaArrowRight className="text-xs" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center mt-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all">
                            View All Projects <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                            What my clients say about working with me
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                variants={fadeInUp}
                                className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl border border-gray-700"
                                whileHover={{ y: -10 }}
                            >
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center mt-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Link href="/testimonials" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all">
                            View All Testimonials <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Have a project in mind? I'd love to help bring your ideas to life.
                            Let's collaborate and create something amazing together.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all text-lg">
                            Get In Touch <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 md:px-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <div className="text-2xl font-bold text-blue-400">Clara B.</div>
                            <p className="text-gray-400 mt-2">Full-Stack Developer & UI/UX Designer</p>
                        </div>
                        <div className="flex gap-6">
                            <a href="https://github.com/ClaraDEV-Fullstack" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaGithub className="text-xl" />
                            </a>
                            <a href="https://linkedin.com/in/clara-beri-794097217/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="https://behance.net/claraberi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaBehance className="text-xl" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Clara B. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}