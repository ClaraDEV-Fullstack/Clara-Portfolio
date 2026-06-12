'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { vyraloApiScreenshots, vyraloDesktopScreenshots, vyraloMobileScreenshots } from "@/data/projects";

export default function VyraloCaseStudy() {
    return (
        <section id="vyralo-koryxtech" className="mt-20 md:mt-28 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
            >
                <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-2">Case Study</p>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Vyralo @ KoryxTech</h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                    Private client project — full-stack SMM platform with responsive user app and admin panel.
                    Screenshots captured from production-like staging (desktop &amp; mobile viewports).
                </p>
            </motion.div>

            <div className="space-y-12">
                <ScreenshotGallery title="Desktop — User app" items={vyraloDesktopScreenshots.slice(0, 6)} />
                <ScreenshotGallery title="Backend — Laravel API surface" items={vyraloApiScreenshots} />
                <ScreenshotGallery title="Desktop — Admin panel" items={vyraloDesktopScreenshots.slice(6)} />
                <ScreenshotGallery title="Mobile" items={vyraloMobileScreenshots} compact />
            </div>
        </section>
    );
}

function ScreenshotGallery({
    title,
    items,
    compact = false,
}: {
    title: string;
    items: { src: string; label: string }[];
    compact?: boolean;
}) {
    return (
        <div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 border-l-4 border-yellow-500 pl-3">
                {title}
            </h3>
            <div
                className={`grid gap-4 ${
                    compact
                        ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
            >
                {items.map((item, index) => (
                    <motion.figure
                        key={item.src}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700/60 hover:border-yellow-500/40 transition-colors"
                    >
                        <div className={`relative w-full ${compact ? "aspect-[9/19]" : "aspect-video"} bg-gray-900`}>
                            <Image
                                src={item.src}
                                alt={item.label}
                                fill
                                sizes={compact ? "(max-width: 640px) 50vw, 25vw" : "(max-width: 1024px) 50vw, 33vw"}
                                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                        <figcaption className="px-3 py-2 text-xs md:text-sm text-gray-300 font-medium">
                            {item.label}
                        </figcaption>
                    </motion.figure>
                ))}
            </div>
        </div>
    );
}
