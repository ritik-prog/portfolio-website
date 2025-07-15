import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Linkedin, Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      content:
        "Working with this developer was exceptional. Their expertise in cloud architecture and full-stack development helped us deliver our project ahead of schedule with outstanding quality.",
      rating: 5,
      platform: "LinkedIn",
      relationship: "Former Colleague",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content:
        "Impressive technical skills combined with excellent communication. The AWS infrastructure they designed scaled perfectly as our user base grew from hundreds to thousands.",
      rating: 5,
      platform: "LinkedIn",
      relationship: "Client",
    },
    {
      name: "Dr. Jennifer Park",
      role: "Professor of Computer Science",
      company: "University of Arizona",
      content:
        "One of the most dedicated students I've had. Their transition from electrical engineering to software development showcases remarkable adaptability and passion for learning.",
      rating: 5,
      platform: "LinkedIn",
      relationship: "Academic Reference",
    },
    {
      name: "Alex Thompson",
      role: "DevOps Engineer",
      company: "CloudTech Solutions",
      content:
        "Great collaboration on our microservices project. Their understanding of both development and deployment made the entire process smooth and efficient.",
      rating: 5,
      platform: "LinkedIn",
      relationship: "Project Collaborator",
    },
  ]

  const featuredPosts = [
    {
      title: "Insights on Claude's Behavior Testing",
      platform: "LinkedIn",
      engagement: "150+ likes, 25 comments",
      summary:
        "Shared observations about AI model behavior testing methodologies, sparking meaningful discussions in the AI community.",
      link: "#",
    },
    {
      title: "AWS CCP Certification Achievement",
      platform: "LinkedIn",
      engagement: "200+ likes, 40 comments",
      summary:
        "Celebrated AWS Cloud Practitioner certification milestone with study tips and resources for the community.",
      link: "#",
    },
    {
      title: "AI Infra Summit Key Takeaways",
      platform: "LinkedIn",
      engagement: "300+ likes, 50 comments",
      summary:
        "Comprehensive post about learnings from AI Infrastructure Summit, highlighting emerging trends and networking insights.",
      link: "#",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimonials & Media</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What colleagues, clients, and mentors say about working with me, plus featured content and community
            engagement.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What People Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Quote className="h-8 w-8 text-emerald-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Linkedin className="h-4 w-4 mr-1" />
                        <span>{testimonial.platform}</span>
                      </div>
                    </div>
                  </div>

                  <Badge variant="outline" className="mt-3 text-xs">
                    {testimonial.relationship}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Posts & Media</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <Linkedin className="h-3 w-3" />
                      <span>{post.platform}</span>
                    </Badge>
                    <span className="text-xs text-gray-500">{post.engagement}</span>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-3 hover:text-emerald-600 transition-colors">
                    <a href={post.link}>{post.title}</a>
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">{post.summary}</p>

                  <div className="mt-4">
                    <a
                      href={post.link}
                      className="text-emerald-600 hover:text-emerald-700 text-sm font-medium inline-flex items-center"
                    >
                      View Post
                      <Quote className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to work together or provide a testimonial?</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
