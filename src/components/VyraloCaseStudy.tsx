'use client';

import { motion } from "framer-motion";
import {
    vyraloApiScreenshots,
    vyraloDesktopScreenshots,
    vyraloMobileScreenshots,
} from "@/data/projects";
import CaseStudyScreenshotGallery from "@/components/projects/ScreenshotGallery";

const VYRALO_USER_SHOTS = (vyraloDesktopScreenshots ?? []).slice(0, 6);
const VYRALO_ADMIN_SHOTS = (vyraloDesktopScreenshots ?? []).slice(6);
const VYRALO_API_SHOTS = vyraloApiScreenshots ?? [];
const VYRALO_MOBILE_SHOTS = vyraloMobileScreenshots ?? [];

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
                    Live at{" "}
                    <a
                        href="https://vyralo.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:underline"
                    >
                        vyralo.net
                    </a>
                    . Screenshots captured from production-like staging (desktop &amp; mobile viewports).
                </p>
            </motion.div>

            <div className="space-y-12">
                <CaseStudyScreenshotGallery
                    title="Desktop — User app"
                    items={VYRALO_USER_SHOTS}
                    accentClass="border-yellow-500"
                />
                <CaseStudyScreenshotGallery
                    title="Backend — Laravel API surface"
                    items={VYRALO_API_SHOTS}
                    accentClass="border-yellow-500"
                />
                <CaseStudyScreenshotGallery
                    title="Desktop — Admin panel"
                    items={VYRALO_ADMIN_SHOTS}
                    accentClass="border-yellow-500"
                />
                <CaseStudyScreenshotGallery
                    title="Mobile"
                    items={VYRALO_MOBILE_SHOTS}
                    compact
                    accentClass="border-yellow-500"
                />
            </div>
        </section>
    );
}
