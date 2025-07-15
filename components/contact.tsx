"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Instagram, Coffee, Send, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and meaningful conversations about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <p className="text-gray-600">Have a project in mind or just want to chat? I'd love to hear from you.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, question, or just say hello!"
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Get In Touch Directly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">Arizona, USA (Open to Remote)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">Availability</p>
                    <p className="text-gray-600">Available for full-time opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Connect on Social</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-gray-600">Professional network</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Github className="h-6 w-6 text-gray-900" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-gray-600">Code repositories</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-pink-600" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-sm text-gray-600">Behind the scenes</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-3 p-3 rounded-lg border bg-emerald-50">
                    <Coffee className="h-6 w-6 text-emerald-600" />
                    <div>
                      <p className="font-medium">Virtual Coffee</p>
                      <p className="text-sm text-gray-600">Let's chat!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <p className="font-medium text-emerald-900">Quick Response Guarantee</p>
                    <p className="text-emerald-700 text-sm mt-1">
                      I typically respond to messages within 24 hours. For urgent matters, feel free to mention it in
                      your subject line.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
