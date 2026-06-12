export type ProjectStatus = "Completed" | "In Progress" | "Planning Phase";

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl: string;
    githubUrl: string;
    status: ProjectStatus;
    featured?: boolean;
    isPrivate?: boolean;
    caseStudyAnchor?: string;
}

export interface ScreenshotGroup {
    src: string;
    label: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "NextShopSphere E-Commerce",
        description:
            "A production-ready full-stack e-commerce platform with real-world architecture. Features secure authentication, role-based access, product management, and an integrated admin dashboard. Dockerized for consistent deployment.",
        technologies: ["Next.js", "Django", "MySQL", "Docker", "REST APIs"],
        image: "/images/landingpage.png",
        demoUrl: "https://nextshopsphere-ui.onrender.com/",
        githubUrl: "https://github.com/ClaraDEV-Fullstack/NextShopSphere",
        status: "Completed",
        featured: true,
    },
    {
        id: 2,
        title: "SmartSpend Tracker",
        description:
            "Full-stack mobile application for financial management. Built with a Flutter frontend consuming Django REST APIs. Includes real-time data management and persistent storage for tracking user expenses.",
        technologies: ["Flutter", "Django", "MySQL", "REST APIs"],
        image: "/images/dashboard.png",
        demoUrl: "",
        githubUrl: "https://github.com/ClaraDEV-Fullstack/SmartSpend-App",
        status: "Completed",
        featured: true,
    },
    {
        id: 3,
        title: "NextSkill-Hub Job Platform",
        description:
            "A collaborative internship project connecting companies, freelancers, and job seekers. Focused on implementing scalable UI components and seamless API integrations within a real-world development workflow.",
        technologies: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
        image: "/images/NextSkill.png",
        demoUrl: "",
        githubUrl: "https://github.com/HighTechLabs/nextskillhub",
        status: "In Progress",
        featured: true,
    },
    {
        id: 4,
        title: "Vyralo @ KoryxTech",
        description:
            "SMM growth platform for social media services — Laravel + Inertia/React SPA with packages, drip-feed orders, crypto deposits, referrals, and a full admin panel (analytics, orders, transactions).",
        technologies: ["Laravel", "React", "TypeScript", "Inertia.js", "PostgreSQL", "Docker"],
        image: "/images/vyralo/desktop-01-home.png",
        demoUrl: "",
        githubUrl: "",
        status: "Completed",
        featured: true,
        isPrivate: true,
        caseStudyAnchor: "vyralo-koryxtech",
    },
];

export const vyraloDesktopScreenshots: ScreenshotGroup[] = [
    { src: "/images/vyralo/desktop-01-home.png", label: "Landing page" },
    { src: "/images/vyralo/desktop-02-pricing.png", label: "Pricing" },
    { src: "/images/vyralo/desktop-03-dashboard.png", label: "User dashboard" },
    { src: "/images/vyralo/desktop-04-order-create.png", label: "Order composer" },
    { src: "/images/vyralo/desktop-05-packages.png", label: "Growth packages" },
    { src: "/images/vyralo/desktop-06-balance.png", label: "Balance & deposits" },
    { src: "/images/vyralo/desktop-07-admin-overview.png", label: "Admin overview" },
    { src: "/images/vyralo/desktop-08-platforms.png", label: "Platforms" },
    { src: "/images/vyralo/desktop-09-auth.png", label: "Sign-in" },
    { src: "/images/vyralo/desktop-10-admin-analytics.png", label: "Admin analytics" },
    { src: "/images/vyralo/desktop-11-admin-orders.png", label: "Admin orders" },
    { src: "/images/vyralo/desktop-12-admin-transactions.png", label: "Admin transactions" },
];

export const vyraloMobileScreenshots: ScreenshotGroup[] = [
    { src: "/images/vyralo/mobile-01-home.png", label: "Landing (mobile)" },
    { src: "/images/vyralo/mobile-02-packages.png", label: "Packages grid" },
    { src: "/images/vyralo/mobile-03-dashboard.png", label: "Dashboard" },
    { src: "/images/vyralo/mobile-04-order-create.png", label: "New order" },
    { src: "/images/vyralo/mobile-05-profile.png", label: "Profile" },
    { src: "/images/vyralo/mobile-06-balance.png", label: "Balance wallet" },
    { src: "/images/vyralo/mobile-07-notifications.png", label: "Notifications" },
    { src: "/images/vyralo/mobile-08-auth.png", label: "Sign-in (mobile)" },
];
