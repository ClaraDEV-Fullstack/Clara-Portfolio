'use client';

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProjectImageLightbox, { type LightboxImage } from "./ProjectImageLightbox";

type ScreenshotItem = {
    src: string;
    label: string;
};

type ScreenshotGalleryProps = {
    title: string;
    items?: ScreenshotItem[];
    compact?: boolean;
    accentClass?: string;
};

export default function ScreenshotGallery({
    title,
    items = [],
    compact = false,
    accentClass = "border-green-500",
}: ScreenshotGalleryProps) {
    const [preview, setPreview] = useState<LightboxImage | null>(null);
    const closePreview = useCallback(() => setPreview(null), []);
    const galleryItems = items ?? [];

    return (
        <>
            <AnimatePresence>
                {preview && <ProjectImageLightbox image={preview} onClose={closePreview} />}
            </AnimatePresence>

            <div>
                <h3 className={`text-lg md:text-xl font-semibold text-white mb-4 border-l-4 pl-3 ${accentClass}`}>
                    {title}
                </h3>
                <div
                    className={`grid gap-4 ${
                        compact
                            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                >
                    {galleryItems.map((item, index) => (
                        <motion.figure
                            key={item.src}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group flex flex-col h-full rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700/60 hover:border-green-500/40 transition-colors"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setPreview({ src: item.src, alt: item.label, caption: item.label })
                                }
                                className={`relative w-full shrink-0 overflow-hidden bg-gray-900 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
                                    compact ? "aspect-[9/19]" : "aspect-[16/10]"
                                }`}
                                aria-label={`View larger: ${item.label}`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    fill
                                    sizes={compact ? "(max-width: 640px) 50vw, 25vw" : "(max-width: 1024px) 50vw, 33vw"}
                                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                                />
                            </button>
                            <figcaption className="px-3 py-2 text-xs md:text-sm text-gray-300 font-medium line-clamp-2 min-h-[2.75rem]">
                                {item.label}
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </>
    );
}
