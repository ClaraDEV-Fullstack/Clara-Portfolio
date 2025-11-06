import type { Metadata } from 'next';

export function createMetadata(title: string, description: string, path?: string): Metadata {
    const url = process.env.NEXT_PUBLIC_SITE_URL || '';
    const canonicalUrl = path ? `${url}${path}` : url;

    return {
        title: `${title} | Clara Portfolio`,
        description,
        keywords: ['frontend developer', 'UI designer', 'Next.js', 'React', 'TypeScript', 'portfolio'],
        authors: [{ name: 'Clara' }],
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