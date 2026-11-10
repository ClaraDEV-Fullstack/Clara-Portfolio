'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { coaScreenshots, projects } from '@/data/projects';
import ScreenshotGallery from '@/components/projects/ScreenshotGallery';

export default function CoaCaseStudy() {
    const project = projects.find(
        (item) => item.caseStudyAnchor === 'coa-clinic-operations-assistant'
    );

    if (!project) return null;

    return (
        <section id="coa-clinic-operations-assistant" className="mt-20 md:mt-28 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
            >
                <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-2">
                    Case Study · Ongoing
                </p>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">{project.title}</h2>
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-400/30">
                        {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                        {project.role}
                    </span>
                </div>
                <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                    {project.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:shadow-lg transition-shadow"
                    >
                        Platform
                        <FaExternalLinkAlt className="text-xs" />
                    </a>
                    {project.patientUrl && (
                        <a
                            href={project.patientUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-semibold border border-gray-600 hover:bg-gray-700 transition-colors"
                        >
                            Patient Application
                            <FaExternalLinkAlt className="text-xs" />
                        </a>
                    )}
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-gray-400 text-xs font-medium border border-gray-700">
                        <FaLock className="text-[10px]" />
                        Staff application requires authorised access
                    </span>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-2xl bg-gray-800/50 border border-gray-700/60 p-5 md:p-7"
                >
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4 border-l-4 border-emerald-500 pl-3">
                        My Contributions
                    </h3>
                    <ul className="space-y-3">
                        {project.contributions?.map((contribution) => (
                            <li key={contribution} className="flex items-start gap-3 text-sm md:text-base text-gray-300 leading-relaxed">
                                <FaCheckCircle className="text-emerald-400 mt-1 shrink-0 text-xs md:text-sm" />
                                <span>{contribution}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-2xl bg-gray-800/50 border border-gray-700/60 p-5 md:p-7"
                >
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-3">
                        Design &amp; Research Approach
                    </h3>
                    <p className="text-sm md:text-base text-gray-200 leading-relaxed bg-gray-900/60 border border-gray-700/60 rounded-xl p-4">
                        {project.approach}
                    </p>

                    <h4 className="text-sm font-semibold text-white mt-6 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="px-2.5 py-1 rounded-md bg-gray-900 text-gray-200 text-xs font-medium border border-gray-700"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    <p className="mt-6 text-xs md:text-sm text-gray-400 leading-relaxed">
                        Screenshots are taken from the local COA staff interface using anonymised or demo data only.
                        Patient identifiers and facility references have been redacted; no private credentials are shown.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-10 md:mt-12"
            >
                <ScreenshotGallery
                    title="Selected interface screenshots"
                    items={coaScreenshots}
                    accentClass="border-emerald-500"
                />
            </motion.div>
        </section>
    );
}
