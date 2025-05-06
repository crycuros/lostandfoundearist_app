import Link from "next/link"
import Image from "next/image"
import { BookOpen, Users, Lightbulb, Code, ChevronRight } from "lucide-react"
import Icon from "@/components/ui/icon"

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6">About Horizon College</h1>
            <p className="text-xl">
              Discover our mission, vision, history, and the vibrant community that makes Horizon College special.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Mission</h3>
                  <p className="text-gray-600">
                    To provide accessible, high-quality education in technology and computer science that empowers
                    students to become innovative leaders and problem-solvers in a rapidly evolving digital world.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Vision</h3>
                  <p className="text-gray-600">
                    To be a leading institution in technology education, recognized for academic excellence, innovation,
                    and producing graduates who make meaningful contributions to society through technological
                    advancement.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Values</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-600">
                        <strong>Excellence:</strong> Striving for the highest standards in education and research.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-600">
                        <strong>Innovation:</strong> Embracing creativity and forward-thinking approaches.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-600">
                        <strong>Inclusivity:</strong> Creating a diverse and welcoming community for all.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-600">
                        <strong>Integrity:</strong> Upholding ethical standards in all endeavors.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-96 relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Horizon College Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our History</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              From humble beginnings to a leading institution in technology education.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary text-white text-xl font-bold px-4 py-2 mb-2 rounded-md">1985</div>
                  <div className="hidden md:block w-0.5 h-full bg-primary/20 ml-6 mt-2"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Foundation</h3>
                  <p className="mb-4 text-gray-600">
                    Horizon College was founded as a small technical institute with just 50 students and 5 faculty
                    members, focusing on computer programming and basic IT skills.
                  </p>
                  <div className="h-48 relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Horizon College Foundation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary text-white text-xl font-bold px-4 py-2 mb-2 rounded-md">1995</div>
                  <div className="hidden md:block w-0.5 h-full bg-primary/20 ml-6 mt-2"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Expansion</h3>
                  <p className="mb-4 text-gray-600">
                    The college expanded its curriculum to include full degree programs in Computer Science and
                    Information Technology, and moved to its current campus location.
                  </p>
                  <div className="h-48 relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Horizon College Expansion"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary text-white text-xl font-bold px-4 py-2 mb-2 rounded-md">2010</div>
                  <div className="hidden md:block w-0.5 h-full bg-primary/20 ml-6 mt-2"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Innovation Hub</h3>
                  <p className="mb-4 text-gray-600">
                    Established the Innovation Hub, a state-of-the-art facility for research and development in emerging
                    technologies, fostering collaboration between students, faculty, and industry partners.
                  </p>
                  <div className="h-48 relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Horizon College Innovation Hub"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary text-white text-xl font-bold px-4 py-2 mb-2 rounded-md">Today</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Leading Institution</h3>
                  <p className="mb-4 text-gray-600">
                    Today, Horizon College is recognized as a leading institution in technology education, with over
                    5,000 students, 200 faculty members, and a wide range of programs in Computer Science, Information
                    Technology, Data Science, Cybersecurity, and Artificial Intelligence.
                  </p>
                  <div className="h-48 relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Horizon College Today"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Leadership</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Meet the dedicated team guiding Horizon College towards excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden relative shadow-md">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Dr. Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
              <p className="font-medium text-primary">President</p>
              <p className="mt-2 text-gray-600">
                Ph.D. in Computer Science with over 20 years of experience in higher education leadership.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden relative shadow-md">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Dr. Michael Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Michael Chen</h3>
              <p className="font-medium text-primary">Dean of Academic Affairs</p>
              <p className="mt-2 text-gray-600">
                Expert in curriculum development and educational technology integration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden relative shadow-md">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Prof. James Wilson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Prof. James Wilson</h3>
              <p className="font-medium text-primary">Chair of Computer Science</p>
              <p className="mt-2 text-gray-600">Leading researcher in artificial intelligence and machine learning.</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden relative shadow-md">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Dr. Lisa Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Lisa Rodriguez</h3>
              <p className="font-medium text-primary">Chair of Information Technology</p>
              <p className="mt-2 text-gray-600">Specialist in cybersecurity and network infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Campus Life</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Experience a vibrant and engaging community at Horizon College.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={Users} variant="primary" />
                <h3 className="text-xl font-bold">Student Organizations</h3>
              </div>
              <p className="mb-4 text-gray-600">
                Join one of our many student organizations, from the Coding Club to the Robotics Team, and connect with
                peers who share your interests.
              </p>
              <div className="h-48 relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Student Organizations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={Code} variant="primary" />
                <h3 className="text-xl font-bold">Events & Competitions</h3>
              </div>
              <p className="mb-4 text-gray-600">
                Participate in hackathons, coding competitions, tech talks, and other events that enhance your learning
                and professional development.
              </p>
              <div className="h-48 relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Events & Competitions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={BookOpen} variant="primary" />
                <h3 className="text-xl font-bold">Learning Resources</h3>
              </div>
              <p className="mb-4 text-gray-600">
                Access state-of-the-art labs, a comprehensive digital library, tutoring services, and other resources to
                support your academic success.
              </p>
              <div className="h-48 relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Learning Resources"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={Lightbulb} variant="primary" />
                <h3 className="text-xl font-bold">Global Opportunities</h3>
              </div>
              <p className="mb-4 text-gray-600">
                Explore study abroad programs, international internships, and global research collaborations that
                broaden your horizons.
              </p>
              <div className="h-48 relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Global Opportunities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Join Our Community</h2>
            <p className="text-xl mb-8">
              Ready to be part of Horizon College? Apply now or schedule a campus visit to learn more about our programs
              and community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admissions" className="btn-secondary">
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
