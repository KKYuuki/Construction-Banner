import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import consMeta from "@/utils/metadata"

const mont = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = consMeta()

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={mont.className}>{children}</body>
        </html>
    )
}
