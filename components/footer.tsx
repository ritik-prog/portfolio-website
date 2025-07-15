"use client"

import { Linkedin, Github, Mail, Instagram, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">Full‑Stack Developer & Cloud Strategist</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              AWS‑Certified developer passionate about building innovative web applications, scalable cloud
              infrastructure, and exploring decentralized technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                <strong className="text-white">Email:</strong>
                <br />
                <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">
                  your.email@example.com
                </a>
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Location:</strong>
                <br />
                Arizona, USA
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Status:</strong>
                <br />
                Available for full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} Portfolio. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
