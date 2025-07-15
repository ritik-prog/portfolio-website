import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Cloud-Native E-Commerce Platform",
      synopsis: "Full-stack e-commerce solution built with microservices architecture on AWS",
      stack: ["React", "Node.js", "AWS Lambda", "DynamoDB", "API Gateway"],
      challenge: "Building a scalable platform that could handle high traffic during peak shopping seasons",
      solution: "Implemented serverless architecture with auto-scaling capabilities and CDN integration",
      outcome: "Achieved 99.9% uptime and reduced infrastructure costs by 40%",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGvs2a5FpmxxJGTkKxOwdwCzZJFN2aLniBg&s",
      liveDemo: "#",
      github: "#",
      featured: true,
    },
    {
      title: "Decentralized Task Management DApp",
      synopsis: "Blockchain-based task management system with smart contract integration",
      stack: ["React", "Solidity", "Web3.js", "IPFS", "MetaMask"],
      challenge: "Creating a trustless system for task assignment and payment verification",
      solution: "Developed smart contracts with escrow functionality and IPFS for decentralized storage",
      outcome: "Successfully deployed on testnet with 95% user satisfaction in beta testing",
      image: "/images.jpg",
      liveDemo: "#",
      github: "#",
      featured: true,
    },
    {
      title: "Real-time Analytics Dashboard",
      synopsis: "Interactive dashboard for monitoring application performance and user metrics",
      stack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
      challenge: "Processing and visualizing large datasets in real-time with minimal latency",
      solution: "Implemented data streaming with Redis and optimized database queries",
      outcome: "Reduced data processing time by 60% and improved decision-making speed",
      image: "/placeholder.svg?height=200&width=400",
      liveDemo: "#",
      github: "#",
      featured: false,
    },
    {
      title: "AI-Powered Content Generator",
      synopsis: "Machine learning application for automated content creation and optimization",
      stack: ["Python", "TensorFlow", "Flask", "AWS SageMaker", "Docker"],
      challenge: "Training models to generate high-quality, contextually relevant content",
      solution: "Fine-tuned transformer models and implemented A/B testing for optimization",
      outcome: "Increased content engagement by 45% and reduced creation time by 70%",
      image: "/placeholder.svg?height=200&width=400",
      liveDemo: "#",
      github: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects & Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions across web development, cloud infrastructure, and emerging technologies.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className={`overflow-hidden ${project.featured ? "ring-2 ring-emerald-200" : ""}`}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  {project.featured && <Badge className="absolute top-4 left-4 bg-emerald-600">Featured</Badge>}
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <p className="text-gray-600">{project.synopsis}</p>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.stack.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-semibold text-red-600">Challenge:</span>
                          <p className="text-gray-600 mt-1">{project.challenge}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-blue-600">Solution:</span>
                          <p className="text-gray-600 mt-1">{project.solution}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-green-600">Outcome:</span>
                          <p className="text-gray-600 mt-1">{project.outcome}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  <div className="flex space-x-3 mt-6">
                    <Button size="sm" className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="flex items-center space-x-2 mx-auto bg-transparent">
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
