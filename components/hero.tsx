"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Professional Photo */}
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-emerald-200 shadow-xl">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQGB3jFCZ0Inqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704375006402?e=2147483647&v=beta&t=cGhCJu8uoei8bU7-W0Veecwc5_csUZ-JKvIOqANc-HI"
                alt="Professional headshot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Full‑Stack Developer & <span className="text-emerald-600">Cloud Strategist</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            AWS‑Certified Full‑Stack Developer crafting innovative web, cloud & decentralized solutions. Passionate
            about building scalable applications and modern infrastructure.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button onClick={() => scrollToSection("about")} size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              About Me
            </Button>
            <Button onClick={() => scrollToSection("projects")} variant="outline" size="lg">
              Projects
            </Button>
            <Button onClick={() => scrollToSection("blog")} variant="outline" size="lg">
              Blog
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
              Contact
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-gray-400 hover:text-emerald-600 transition-colors"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
            <span className="sr-only">Scroll to about section</span>
          </button>
        </div>
      </div>
    </section>
  )
}
