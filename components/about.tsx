import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Users, Globe } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating innovative solutions at the intersection of web development, cloud infrastructure,
            and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-emerald-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600">
                  <strong>B.S. in Electrical & Computer Engineering</strong>
                  <br />
                  University of Arizona
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Globe className="h-6 w-6 text-emerald-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Status</h3>
                <p className="text-gray-600">
                  F‑1 OPT holder actively seeking full‑time opportunities in software development and cloud engineering
                  roles.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Award className="h-6 w-6 text-emerald-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Certifications</h3>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                  AWS Certified Cloud Practitioner
                </Badge>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-emerald-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community & Networking</h3>
                <p className="text-gray-600">
                  Active participant in tech conferences including AI Infra Summit, passionate about knowledge sharing
                  and building meaningful professional connections.
                </p>
              </div>
            </div>
          </div>

          <Card className="h-fit">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tech Passions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Web Development</h4>
                  <p className="text-gray-600 text-sm">
                    Building responsive, user-centric applications with modern frameworks and best practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cloud Infrastructure</h4>
                  <p className="text-gray-600 text-sm">
                    Designing scalable, secure cloud solutions with AWS services and DevOps practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Decentralized Systems</h4>
                  <p className="text-gray-600 text-sm">
                    Exploring blockchain technology and distributed architectures for next-generation applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
