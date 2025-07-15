import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Cloud, Database, GitBranch, Blocks } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["JavaScript", "React", "HTML/CSS", "TypeScript", "Next.js", "Tailwind CSS"],
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Python", "Express", "REST APIs", "GraphQL", "Microservices"],
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      title: "Cloud/DevOps",
      icon: Cloud,
      skills: ["AWS (CCP Certified)", "Docker", "CI/CD Pipelines", "Kubernetes", "Terraform", "Serverless"],
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["SQL", "NoSQL", "PostgreSQL", "MongoDB", "Redis", "DynamoDB"],
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      title: "Tools & Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub Actions", "VS Code", "Postman", "Jest", "ESLint"],
      color: "bg-gray-50 text-gray-700 border-gray-200",
    },
    {
      title: "Decentralized",
      icon: Blocks,
      skills: ["Blockchain", "Smart Contracts", "Web3", "Ethereum", "Solidity", "IPFS"],
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Tech Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications across the full stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
