'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { betBotApiScreenshots, betBotDesktopScreenshots, betBotMobileScreenshots } from "@/data/projects";

export default function BetBotProCaseStudy() {
    return (
        <section id="bet-bot-pro" className="mt-20 md:mt-28 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
            >
                <p className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-2">Case Study</p>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Bet Bot Pro @ KoryxTech</h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                    AI sports betting bot for BetPawa Cameroon — live at{" "}
                    <a
                        href="https://bets.koryx.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline"
                    >
                        bets.koryx.net
                    </a>
                    . DeepSeek + Gemini research, Kelly bankroll, coupon generation, and Playwright automation.
                    Source code is private (KoryxTech client project).
                </p>
            </motion.div>

            <div className="space-y-12">
                <ScreenshotGallery title="Desktop — App" items={betBotDesktopScreenshots} />
                <ScreenshotGallery title="Backend — FastAPI OpenAPI docs" items={betBotApiScreenshots} />
                <ScreenshotGallery title="Mobile" items={betBotMobileScreenshots} compact />
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
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 border-l-4 border-green-500 pl-3">
                {title}
            </h3>
            <div
                className={`grid gap-4 ${
                    compact
                        ? "grid-cols-2 sm:grid-cols-4"
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
                        className="group rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700/60 hover:border-green-500/40 transition-colors"
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
