import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"

export function Speaking() {
  const events = [
    {
      title: "AI Infrastructure Summit 3",
      type: "Conference Participation",
      date: "2024-11-15",
      location: "San Francisco, CA",
      description:
        "Participated in one of the premier AI infrastructure conferences, engaging with industry leaders and exploring cutting-edge developments in AI/ML infrastructure.",
      highlights: [
        "Networked with 200+ AI infrastructure professionals",
        "Attended sessions on scalable ML pipelines",
        "Participated in hands-on workshops on GPU optimization",
        "Connected with potential collaborators and mentors",
      ],
      attendees: "500+",
      link: "#",
    },
    {
      title: "AWS Learning Circle - Cloud Architecture",
      type: "Workshop Facilitator",
      date: "2024-10-20",
      location: "Virtual",
      description:
        "Facilitated a learning circle focused on AWS cloud architecture best practices, helping fellow developers prepare for cloud certifications.",
      highlights: [
        "Led discussions on serverless architecture patterns",
        "Shared real-world AWS implementation experiences",
        "Mentored 15+ developers in cloud concepts",
        "Created study materials and practice scenarios",
      ],
      attendees: "25",
      link: "#",
    },
    {
      title: "University of Arizona Tech Talk",
      type: "Guest Speaker",
      date: "2024-09-12",
      location: "Tucson, AZ",
      description:
        "Delivered a presentation to ECE students about transitioning from electrical engineering to software development and cloud computing.",
      highlights: [
        "Shared career transition strategies",
        "Demonstrated cloud development workflows",
        "Provided mentorship to 50+ students",
        "Discussed industry trends and opportunities",
      ],
      attendees: "75",
      link: "#",
    },
  ]

  const upcomingEvents = [
    {
      title: "Local Developer Meetup",
      type: "Lightning Talk",
      date: "2025-02-15",
      location: "Phoenix, AZ",
      topic: "Serverless Architecture Patterns",
      status: "Confirmed",
    },
    {
      title: "Cloud Computing Conference",
      type: "Panel Discussion",
      date: "2025-03-20",
      location: "Denver, CO",
      topic: "Career Paths in Cloud Engineering",
      status: "Pending",
    },
  ]

  return (
    <section id="speaking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Speaking & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge and connecting with the tech community through conferences, workshops, and speaking
            engagements.
          </p>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Past Events</h3>
          <div className="space-y-8">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gray-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <Badge variant="secondary" className="mb-2">
                        {event.type}
                      </Badge>
                    </div>
                    <div className="flex flex-col md:items-end space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {event.attendees} attendees
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                      <span>Learn More</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge
                      variant={event.status === "Confirmed" ? "default" : "secondary"}
                      className={event.status === "Confirmed" ? "bg-emerald-600" : ""}
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {event.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Topic:</strong> {event.topic}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in having me speak at your event or participate in a panel discussion?
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
