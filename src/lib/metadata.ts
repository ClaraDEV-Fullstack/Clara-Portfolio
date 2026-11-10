import type { Metadata } from 'next';

export function createMetadata(title: string, description: string, path?: string): Metadata {
    const url = process.env.NEXT_PUBLIC_SITE_URL || '';
    const canonicalUrl = path ? `${url}${path}` : url;

    return {
        title: `${title} | Clara Portfolio`,
        description,
        keywords: [
            'full-stack developer',
            'user research',
            'human-centred design',
            'UI/UX design',
            'user experience',
            'workflow analysis',
            'usability testing',
            'feedback collection',
            'iterative design',
            'cross-functional collaboration',
            'digital innovation',
            'Next.js',
            'React',
            'TypeScript',
            'portfolio',
        ],
        authors: [{ name: 'Clara Beri' }],
        openGraph: {
            title: `${title} | Clara Portfolio`,
            description,
            type: 'website',
            locale: 'en_US',
            url: canonicalUrl,
            siteName: 'Clara Portfolio',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | Clara Portfolio`,
            description,
        },
        alternates: {
            canonical: canonicalUrl,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}