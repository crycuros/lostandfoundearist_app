import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Code, Server, Shield, Database, Brain, ChevronRight } from "lucide-react"
import Icon from "@/components/ui/icon"

export default function Academics() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6">Academic Programs</h1>
            <p className="text-xl">
              Discover our comprehensive range of programs designed to prepare you for success in the rapidly evolving
              tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* Computer Science Section */}
      <section id="computer-science" className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">Department</div>
              <h2 className="mb-6">Computer Science</h2>
              <p className="mb-6 text-gray-600">
                Our Computer Science department offers cutting-edge curriculum that combines theoretical foundations
                with practical applications. Students gain expertise in software development, algorithms, artificial
                intelligence, and more through hands-on projects and research opportunities.
              </p>
              <p className="mb-6 text-gray-600">
                With state-of-the-art labs and experienced faculty, we prepare students for careers in software
                engineering, data science, AI research, and other high-demand fields.
              </p>
            </div>
            <div className="h-80 relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Computer Science Department"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CS Courses */}
      <section className="section bg-gray-50">
        <div className="container">
          <h3 className="text-2xl font-bold mb-8 text-center">Computer Science Courses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={Code} variant="primary" />
                <h4 className="text-xl font-bold">Software Engineering</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Learn modern software development methodologies, design patterns, and best practices for building robust
                applications.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-primary" />
                  <span>Object-Oriented Programming</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-primary" />
                  <span>Software Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-primary" />
                  <span>Agile Development</span>
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
                View Course Details <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={Database} variant="primary" />
                <h4 className="text-xl font-bold">Data Structures & Algorithms</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Master fundamental data structures and algorithms essential for efficient problem-solving and software
                development.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-primary" />
                  <span>Array and Linked Structures</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-primary" />
                  <span>Sorting and Searching</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-primary" />
                  <span>Graph Algorithms</span>
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
                View Course Details <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={Brain} variant="primary" />
                <h4 className="text-xl font-bold">Artificial Intelligence</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Explore the principles and applications of artificial intelligence, machine learning, and neural
                networks.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-primary" />
                  <span>Machine Learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-primary" />
                  <span>Neural Networks</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-primary" />
                  <span>Natural Language Processing</span>
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
                View Course Details <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Information Technology Section */}
      <section id="information-technology" className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 h-80 relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Information Technology Department"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full mb-4">Department</div>
              <h2 className="mb-6">Information Technology</h2>
              <p className="mb-6 text-gray-600">
                Our Information Technology department focuses on practical skills and knowledge needed to design,
                implement, and manage technology infrastructure. Students learn about network administration,
                cybersecurity, cloud computing, and system analysis.
              </p>
              <p className="mb-6 text-gray-600">
                With industry-aligned curriculum and hands-on training, we prepare students for in-demand careers as
                network administrators, cybersecurity specialists, cloud architects, and IT consultants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Courses */}
      <section className="section bg-gray-50">
        <div className="container">
          <h3 className="text-2xl font-bold mb-8 text-center">Information Technology Courses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={Server} variant="secondary" />
                <h4 className="text-xl font-bold">Network Administration</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Learn to design, implement, and manage computer networks for organizations of all sizes.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-secondary" />
                  <span>Network Protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-secondary" />
                  <span>Router Configuration</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-secondary" />
                  <span>Network Security</span>
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium">
                View Course Details <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={Shield} variant="secondary" />
                <h4 className="text-xl font-bold">Cybersecurity</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Develop skills to protect systems, networks, and programs from digital attacks and security breaches.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-secondary" />
                  <span>Ethical Hacking</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-secondary" />
                  <span>Security Auditing</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-secondary" />
                  <span>Incident Response</span>
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium">
                View Course Details <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon={BookOpen} variant="secondary" />
                <h4 className="text-xl font-bold">Cloud Computing</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Master cloud technologies and learn to deploy, manage, and scale applications in cloud environments.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-secondary" />
                  <span>Cloud Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-secondary" />
                  <span>Virtualization</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-secondary" />
                  <span>Containerization</span>
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium">
                View Course Details <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Begin Your Academic Journey?</h2>
            <p className="text-xl mb-8">
              Take the first step towards a rewarding career in technology. Apply now or contact us to learn more about
              our programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admissions" className="btn-secondary">
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
