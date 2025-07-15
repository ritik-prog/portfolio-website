import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Full-Stack Developer & Cloud Strategist | Portfolio",
  description:
    "AWS-Certified Full-Stack Developer crafting innovative web, cloud & decentralized solutions. Passionate about building scalable applications and modern infrastructure.",
  keywords: "full-stack developer, cloud engineer, AWS certified, React, Node.js, web development, cloud architecture",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Full-Stack Developer & Cloud Strategist | Portfolio",
    description: "AWS-Certified Full-Stack Developer crafting innovative web, cloud & decentralized solutions.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
