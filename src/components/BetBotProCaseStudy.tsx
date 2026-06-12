'use client';

import { motion } from "framer-motion";
import { betBotApiScreenshots, betBotDesktopScreenshots, betBotMobileScreenshots } from "@/data/projects";
import ScreenshotGallery from "@/components/projects/ScreenshotGallery";

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
                <ScreenshotGallery title="Desktop — App" items={betBotDesktopScreenshots} accentClass="border-green-500" />
                <ScreenshotGallery title="Backend — FastAPI OpenAPI docs" items={betBotApiScreenshots} accentClass="border-green-500" />
                <ScreenshotGallery title="Mobile" items={betBotMobileScreenshots} compact accentClass="border-green-500" />
            </div>
        </section>
    );
}
