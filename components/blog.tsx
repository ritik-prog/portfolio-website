import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Blog() {
  const blogPosts = [
    {
      title: "My AWS Cloud Practitioner Certification Journey",
      summary:
        "A comprehensive guide to preparing for and passing the AWS CCP exam, including study resources, tips, and lessons learned.",
      category: "Cloud",
      date: "2024-12-15",
      readTime: "8 min read",
      thumbnail: "/placeholder.svg?height=200&width=300",
      link: "#",
      featured: true,
    },
    {
      title: "Key Takeaways from AI Infra Summit 3",
      summary:
        "Insights and reflections from attending one of the premier AI infrastructure conferences, covering emerging trends and networking highlights.",
      category: "AI/ML",
      date: "2024-11-28",
      readTime: "6 min read",
      thumbnail: "/placeholder.svg?height=200&width=300",
      link: "#",
      featured: true,
    },
    {
      title: "Building Scalable Microservices with Node.js and Docker",
      summary:
        "A deep dive into architecting and deploying microservices using containerization and orchestration best practices.",
      category: "Development",
      date: "2024-11-10",
      readTime: "12 min read",
      thumbnail: "/placeholder.svg?height=200&width=300",
      link: "#",
      featured: false,
    },
    {
      title: "Introduction to Web3 Development for Traditional Developers",
      summary:
        "Bridging the gap between traditional web development and decentralized applications with practical examples.",
      category: "Blockchain",
      date: "2024-10-22",
      readTime: "10 min read",
      thumbnail: "/placeholder.svg?height=200&width=300",
      link: "#",
      featured: false,
    },
    {
      title: "Optimizing React Applications for Performance",
      summary:
        "Practical techniques and tools for improving React app performance, from code splitting to state management optimization.",
      category: "Frontend",
      date: "2024-10-05",
      readTime: "9 min read",
      thumbnail: "/placeholder.svg?height=200&width=300",
      link: "#",
      featured: false,
    },
    {
      title: "DevOps Best Practices for Small Teams",
      summary:
        "Implementing CI/CD pipelines and infrastructure as code without overwhelming your development workflow.",
      category: "DevOps",
      date: "2024-09-18",
      readTime: "7 min read",
      thumbnail: "/placeholder.svg?height=200&width=300",
      link: "#",
      featured: false,
    },
  ]

  const categories = ["All", "Cloud", "AI/ML", "Development", "Blockchain", "Frontend", "DevOps"]

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge, experiences, and insights from my journey in technology and software development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Posts</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={post.thumbnail || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <Badge className="absolute top-4 left-4 bg-emerald-600">Featured</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl hover:text-emerald-600 transition-colors">
                      <a href={post.link}>{post.title}</a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                        <span>Read More</span>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-40">
                    <Image src={post.thumbnail || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg hover:text-emerald-600 transition-colors line-clamp-2">
                      <a href={post.link}>{post.title}</a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{post.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="flex items-center space-x-2 mx-auto bg-transparent">
            <span>View All Posts</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
