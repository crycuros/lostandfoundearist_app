import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Award, Lightbulb, ChevronRight } from "lucide-react"
import Icon from "@/components/ui/icon"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">Empowering Minds, Shaping Futures</h1>
            <p className="text-xl md:text-2xl mb-8">
              Horizon College offers world-class education in Computer Science and Information Technology. Join our
              community of innovators and leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/admissions" className="btn-secondary">
                Apply Now
              </Link>
              <Link
                href="/academics"
                className="bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Departments */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Departments</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our cutting-edge departments offer comprehensive programs designed to prepare you for the future of
              technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Computer Science */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Computer Science Department"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3">Computer Science</h3>
                <p className="text-gray-600 mb-4">
                  Our Computer Science department offers cutting-edge curriculum in software development, algorithms,
                  artificial intelligence, and more. Learn from industry experts and gain hands-on experience through
                  our state-of-the-art labs.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-primary" />
                    <span>Software Engineering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-primary" />
                    <span>Artificial Intelligence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-primary" />
                    <span>Data Structures & Algorithms</span>
                  </li>
                </ul>
                <Link
                  href="/academics#computer-science"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Information Technology */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Information Technology Department"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3">Information Technology</h3>
                <p className="text-gray-600 mb-4">
                  Our IT department focuses on practical skills in network administration, cybersecurity, cloud
                  computing, and system analysis. Prepare for in-demand careers with our industry-aligned curriculum.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-primary" />
                    <span>Network Administration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-primary" />
                    <span>Cybersecurity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-primary" />
                    <span>Cloud Computing</span>
                  </li>
                </ul>
                <Link
                  href="/academics#information-technology"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Horizon College</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              We provide a supportive environment where students can thrive academically and personally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Icon icon={BookOpen} variant="primary" className="mx-auto mb-4" />
              <h3 className="text-xl mb-2">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from industry professionals and renowned academics with years of experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Icon icon={Lightbulb} variant="primary" className="mx-auto mb-4" />
              <h3 className="text-xl mb-2">Innovative Curriculum</h3>
              <p className="text-gray-600">
                Our programs are regularly updated to reflect the latest industry trends and technologies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Icon icon={Users} variant="primary" className="mx-auto mb-4" />
              <h3 className="text-xl mb-2">Supportive Community</h3>
              <p className="text-gray-600">
                Join a diverse and inclusive community that supports your academic and personal growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Icon icon={Award} variant="primary" className="mx-auto mb-4" />
              <h3 className="text-xl mb-2">Career Success</h3>
              <p className="text-gray-600">
                Our graduates are highly sought after by top employers in the technology industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Start Your Journey?</h2>
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
