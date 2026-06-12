'use client';

import Image from "next/image";
import type { ProjectStatus } from "@/data/projects";

const statusColors: Record<ProjectStatus, string> = {
    "Completed": "bg-green-500",
    "In Progress": "bg-yellow-500",
    "Planning Phase": "bg-blue-500",
};

type ProjectThumbnailProps = {
    src: string;
    alt: string;
    status?: ProjectStatus;
    onClick: () => void;
};

/** Uniform 16:10 thumbnail — click opens lightbox. */
export default function ProjectThumbnail({ src, alt, status, onClick }: ProjectThumbnailProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="relative w-full aspect-[16/10] shrink-0 overflow-hidden bg-gray-100 text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label={`View larger screenshot of ${alt}`}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none" />
            {status && (
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-20 pointer-events-none">
                    <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white ${statusColors[status]}`}>
                        {status}
                    </span>
                </div>
            )}
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </button>
    );
}
