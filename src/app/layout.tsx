import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
    title: "Clara Beri | Full-Stack Developer | User Research & UI/UX Design",
    description:
        "Portfolio of Clara Beri — a Full-Stack Web & Mobile Developer with 3+ years of experience in user research, UI/UX design, workflow analysis, usability testing and human-centred digital solutions.",
    keywords: [
        "Clara Beri",
        "Full-Stack Development",
        "Full Stack Developer",
        "User Research",
        "Human-Centred Design",
        "User Needs Assessment",
        "Stakeholder Engagement",
        "UI/UX Design",
        "User Experience",
        "Workflow Analysis",
        "Usability Testing",
        "Feedback Collection",
        "Iterative Design",
        "Participatory Design",
        "Cross-functional Collaboration",
        "Digital Innovation",
        "Problem-Solving",
        "Frontend Developer",
        "Mobile Developer",
        "Next.js",
        "React",
        "TypeScript",
        "Portfolio",
    ],
    authors: [{ name: "Clara Beri" }],
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
    metadataBase: new URL("https://claradev.vercel.app"),

    // Open Graph for LinkedIn, Facebook, etc.
    openGraph: {
        title: "Clara Beri | Full-Stack Developer | User Research & UI/UX Design",
        description:
            "Explore Clara Beri’s portfolio — user research, UI/UX design, workflow analysis and full-stack web and mobile development.",
        url: "https://claradev.vercel.app/",
        siteName: "Clara Beri Portfolio",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://claradev.vercel.app/images/layout.jpg",
                width: 1200,
                height: 630,
                alt: "Clara Beri Portfolio Preview",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Clara Beri | Full-Stack Developer | User Research & UI/UX Design",
        description:
            "Clara Beri — Full-Stack Developer combining user research, human-centred design and practical digital solutions.",
        images: ["https://claradev.vercel.app/images/layout.jpg"],
    },

    // Optional: Favicon / Apple icons for full device support
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 w-full transition-all">
            <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 w-full">
                {children}
            </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll To Top Button */}
        <ScrollToTop />
        </body>
        </html>
    );
}
