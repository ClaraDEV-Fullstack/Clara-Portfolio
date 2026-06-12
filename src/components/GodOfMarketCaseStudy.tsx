'use client';

import { motion } from "framer-motion";
import {
    gomAdminScreenshots,
    gomApiScreenshots,
    gomMobileScreenshots,
    gomPublicScreenshots,
    gomUserScreenshots,
} from "@/data/projects";
import ScreenshotGallery from "@/components/projects/ScreenshotGallery";

export default function GodOfMarketCaseStudy() {
    return (
        <section id="god-of-market-koryxtech" className="mt-20 md:mt-28 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
            >
                <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-2">Case Study</p>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">God of Market @ KoryxTech</h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                    Private KoryxTech client project — full-stack trading platform with live deployment at{" "}
                    <a
                        href="https://godofmarket.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                    >
                        godofmarket.com
                    </a>
                    . Signals, robot automation, market analysis, education, subscriptions, and RBAC admin.
                </p>
            </motion.div>

            <div className="space-y-12">
                <ScreenshotGallery title="Public — Marketing & access" items={gomPublicScreenshots} accentClass="border-emerald-500" />
                <ScreenshotGallery title="Desktop — User app" items={gomUserScreenshots} accentClass="border-emerald-500" />
                <ScreenshotGallery title="Backend — FastAPI OpenAPI docs" items={gomApiScreenshots} accentClass="border-emerald-500" />
                <ScreenshotGallery title="Desktop — Admin panel" items={gomAdminScreenshots} accentClass="border-emerald-500" />
                <ScreenshotGallery title="Mobile" items={gomMobileScreenshots} compact accentClass="border-emerald-500" />
            </div>
        </section>
    );
}
