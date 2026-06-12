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
        id: 6,
        title: "Bet Bot Pro @ KoryxTech",
        description:
            "AI sports betting assistant for BetPawa Cameroon — DeepSeek + Gemini match research, Kelly Criterion bankroll, coupon generation, and Playwright auto-bet with live WebSocket logs. Deployed at bets.koryx.net.",
        technologies: ["Next.js", "TypeScript", "FastAPI", "Playwright", "Redis", "PostgreSQL", "Docker"],
        image: "/images/bet-bot-pro/desktop-01-home.png",
        demoUrl: "https://bets.koryx.net/",
        githubUrl: "",
        status: "Completed",
        featured: true,
        isPrivate: true,
        caseStudyAnchor: "bet-bot-pro",
    },
    {
        id: 5,
        title: "God of Market @ KoryxTech",
        description:
            "Premium trading ecosystem — signals, trading robot, market analysis, LMS, Stripe subscriptions, and RBAC admin. Next.js + FastAPI stack with Telegram integration. Live at godofmarket.com.",
        technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Stripe", "Docker"],
        image: "/images/god-of-market/desktop-01-home.png",
        demoUrl: "https://godofmarket.com/",
        githubUrl: "",
        status: "Completed",
        featured: true,
        isPrivate: true,
        caseStudyAnchor: "god-of-market-koryxtech",
    },
    {
        id: 1,
        title: "NexShop E-Commerce",
        description:
            "Full-stack e-commerce platform for the Cameroon market (FCFA). React + Django REST API with JWT & Google OAuth, mobile money checkout (Orange Money / MTN MoMo), cart, wishlist, reviews, order tracking, and Brevo email notifications. Deployed on Render with Supabase media CDN.",
        technologies: ["React", "Django", "PostgreSQL", "Redux", "Docker", "Tailwind CSS"],
        image: "/images/nexshop.png",
        demoUrl: "https://nextshop-ui.onrender.com/",
        githubUrl: "https://github.com/ClaraDEV-Fullstack/NexShop",
        status: "Completed",
        featured: true,
    },
    {
        id: 2,
        title: "SmartSpend — Intelligent Finance Tracker",
        description:
            "Cross-platform personal finance app (Android, iOS, Web, Windows) built with Flutter and Django REST API. Offline-first expense tracking with sync queues, Google Sign-In, biometric unlock, dashboard charts, budget alerts, recurring transactions, CSV/PDF export, AI assistant, and English/French localization.",
        technologies: ["Flutter", "Django", "Python", "MySQL", "REST APIs"],
        image: "/images/smartspend.png",
        demoUrl: "",
        githubUrl: "https://github.com/ClaraDEV-Fullstack/SmartSpend-App",
        status: "In Progress",
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

export const betBotDesktopScreenshots: ScreenshotGroup[] = [
    { src: "/images/bet-bot-pro/desktop-01-home.png", label: "Landing — AI-powered BetPawa assistant" },
    { src: "/images/bet-bot-pro/desktop-02-auth.png", label: "BetPawa secure login" },
    { src: "/images/bet-bot-pro/desktop-03-predictions.png", label: "AI predictions — match analysis" },
    { src: "/images/bet-bot-pro/desktop-04-dashboard.png", label: "Dashboard — advanced coupon generator" },
    { src: "/images/bet-bot-pro/desktop-05-ready-coupons.png", label: "Ready-to-play coupons" },
    { src: "/images/bet-bot-pro/desktop-07-generated-coupons.png", label: "Generated coupons — booking codes" },
    { src: "/images/bet-bot-pro/desktop-06-my-bets.png", label: "My bets — activity tracking" },
];

export const betBotApiScreenshots: ScreenshotGroup[] = [
    { src: "/images/bet-bot-pro/desktop-08-api-overview.png", label: "FastAPI OpenAPI — platform overview" },
    { src: "/images/bet-bot-pro/desktop-09-api-endpoints.png", label: "REST API — predictions, auto-research & BetPawa automation" },
];

export const betBotMobileScreenshots: ScreenshotGroup[] = [
    { src: "/images/bet-bot-pro/mobile-01-home.png", label: "Landing (mobile)" },
    { src: "/images/bet-bot-pro/mobile-02-dashboard.png", label: "Coupon generator (mobile)" },
    { src: "/images/bet-bot-pro/mobile-04-predictions.png", label: "AI predictions (mobile)" },
    { src: "/images/bet-bot-pro/mobile-03-coupons.png", label: "Ready coupons (mobile)" },
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

export const gomPublicScreenshots: ScreenshotGroup[] = [
    { src: "/images/god-of-market/desktop-01-home.png", label: "Landing page — hero & live KPI preview" },
    { src: "/images/god-of-market/desktop-13-landing-dark.png", label: "Landing page — dark hero variant" },
    { src: "/images/god-of-market/desktop-08-auth.png", label: "Sign-in & secure access" },
];

export const gomUserScreenshots: ScreenshotGroup[] = [
    { src: "/images/god-of-market/desktop-02-dashboard.png", label: "Premium user dashboard" },
    { src: "/images/god-of-market/desktop-04-signals.png", label: "Trading signals — history & performance" },
    { src: "/images/god-of-market/desktop-05-signal-stats.png", label: "Signal statistics & win rate" },
    { src: "/images/god-of-market/desktop-07-market.png", label: "Market analysis — Forex pairs" },
    { src: "/images/god-of-market/desktop-03-learn.png", label: "Trading education — LMS chapters" },
    { src: "/images/god-of-market/desktop-06-profile.png", label: "User profile & account settings" },
];

export const gomApiScreenshots: ScreenshotGroup[] = [
    { src: "/images/god-of-market/desktop-14-api-overview.png", label: "FastAPI OpenAPI — platform overview" },
    { src: "/images/god-of-market/desktop-15-api-endpoints.png", label: "REST API — auth, users, signals & more" },
];

export const gomAdminScreenshots: ScreenshotGroup[] = [
    { src: "/images/god-of-market/desktop-09-admin-overview.png", label: "Admin overview — KPIs & health" },
    { src: "/images/god-of-market/desktop-12-admin-users.png", label: "User management — premium tiers" },
    { src: "/images/god-of-market/desktop-10-admin-roles.png", label: "RBAC roles registry" },
    { src: "/images/god-of-market/desktop-11-admin-permissions.png", label: "Permissions catalog" },
];

export const gomMobileScreenshots: ScreenshotGroup[] = [
    { src: "/images/god-of-market/mobile-01-home.png", label: "Landing (mobile)" },
    { src: "/images/god-of-market/mobile-02-dashboard.png", label: "Dashboard (mobile)" },
    { src: "/images/god-of-market/mobile-03-account.png", label: "Account menu & i18n (mobile)" },
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
