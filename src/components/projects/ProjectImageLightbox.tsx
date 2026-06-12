'use client';

import { useEffect, type MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export type LightboxImage = {
    src: string;
    alt: string;
    caption?: string;
};

export default function ProjectImageLightbox({
    image,
    onClose,
}: {
    image: LightboxImage;
    onClose: () => void;
}) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={image.alt}
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/25 transition-colors"
                aria-label="Close preview"
            >
                <FaTimes className="text-xl" />
            </button>

            <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative w-[95vw] max-w-7xl h-[80vh] max-h-[90vh] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="95vw"
                    className="object-contain bg-gray-950"
                    priority
                />
            </motion.div>

            {image.caption && (
                <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm md:text-base text-white/90 font-medium pointer-events-none text-center px-4 max-w-3xl">
                    {image.caption}
                </p>
            )}
        </motion.div>
    );
}
