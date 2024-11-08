import { Metadata } from 'next'

export default function consMeta({
    title = process.env.SITE_NAME || 'Under Construction',
    description = process.env.SITE_DESC || 'This site is under development by DEVGO Studio. Please come back later. For more information, contact us at contact@devgo.studio',
    image = '/banner.png',
    icons = '/icon.webp',
    noIndex = true,
    url = process.env.BASE_URL || 'https://devgo.studio'
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
    url?: string
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
        icons,
        metadataBase: new URL(url),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    }
}
