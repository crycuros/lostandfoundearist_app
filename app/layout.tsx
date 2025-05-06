import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import SkipToContent from "@/components/skip-to-content"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

// SEO metadata
export const metadata: Metadata = {
  title: "Horizon College | Empowering Minds, Shaping Futures",
  description:
    "Horizon College offers world-class education in Computer Science and Information Technology. Join our community of innovators and leaders.",
  keywords: "college, education, computer science, IT, higher education, university",
  authors: [{ name: "Horizon College" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <SkipToContent />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1 pt-24">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}
