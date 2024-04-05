import { Metadata } from 'next'

export default function consMeta({
    title = process.env.SITE_NAME || 'Under Construction',
    description = process.env.SITE_DESC || 'This site is under development by DEVGO Studio. Please come back later. For more information, contact us at contact@devgo.studio',
    image = '/banner.webp',
    icons = '/icon.webp',
    noIndex = false,
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@adrianbonpin',
        },
        icons,
        metadataBase: new URL('https://www.islandvibes.ph'),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    }
}
