'use client';

import Image from "next/image";
import type { ProjectStatus } from "@/data/projects";

const statusColors: Record<ProjectStatus, string> = {
    "Completed": "bg-green-500",
    "In Progress": "bg-yellow-500",
    "Ongoing": "bg-amber-600",
    "Planning Phase": "bg-blue-500",
};

type ProjectThumbnailProps = {
    src?: string;
    alt: string;
    status?: ProjectStatus;
    onClick?: () => void;
};

/** Uniform 16:10 thumbnail — click opens lightbox. Falls back to a clearly labelled placeholder when no screenshot exists. */
export default function ProjectThumbnail({ src, alt, status, onClick }: ProjectThumbnailProps) {
    const statusBadge = status && (
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-20 pointer-events-none">
            <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white ${statusColors[status]}`}>
                {status}
            </span>
        </div>
    );

    if (!src) {
        return (
            <div
                className="relative w-full aspect-[16/10] shrink-0 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-left"
                role="img"
                aria-label={`${alt} — screenshot pending`}
            >
                <div className="absolute inset-0 bg-grid-pattern bg-[length:24px_24px] opacity-[0.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
                {statusBadge}
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400/90">
                        Screenshot pending
                    </span>
                    <span className="mt-1 text-lg sm:text-2xl font-bold text-white">COA</span>
                    <span className="mt-0.5 text-[10px] sm:text-xs text-gray-300">
                        Clinic Operations Assistant
                    </span>
                </div>
            </div>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className="relative w-full aspect-[16/10] shrink-0 overflow-hidden bg-gray-100 text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label={`View larger screenshot of ${alt}`}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none" />
            {statusBadge}
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
