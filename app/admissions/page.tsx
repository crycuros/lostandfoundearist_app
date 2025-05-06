"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { FileText, CheckCircle, Calendar, Users, Award, ArrowRight, ChevronRight, ClipboardCheck } from "lucide-react"
import Icon from "@/components/ui/icon"

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    semester: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6">Admissions</h1>
            <p className="text-xl">
              Join our community of innovators and leaders. Apply now to start your journey at Horizon College.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Admissions Process</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our admissions process is designed to be straightforward and supportive. Follow these steps to begin your
              journey with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="text-center mb-4">
                <Icon icon={FileText} variant="primary" className="mx-auto" />
              </div>
              <h3 className="text-xl text-center mb-2">Submit Application</h3>
              <p className="text-center text-gray-600">
                Complete and submit the online application form with all required documents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="text-center mb-4">
                <Icon icon={ClipboardCheck} variant="primary" className="mx-auto" />
              </div>
              <h3 className="text-xl text-center mb-2">Application Review</h3>
              <p className="text-center text-gray-600">
                Our admissions team will review your application and academic credentials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="text-center mb-4">
                <Icon icon={Users} variant="primary" className="mx-auto" />
              </div>
              <h3 className="text-xl text-center mb-2">Interview</h3>
              <p className="text-center text-gray-600">
                Selected candidates will be invited for an interview with faculty members.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="text-center mb-4">
                <Icon icon={CheckCircle} variant="primary" className="mx-auto" />
              </div>
              <h3 className="text-xl text-center mb-2">Admission Decision</h3>
              <p className="text-center text-gray-600">Receive your admission decision and enrollment information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Apply Now</h2>
              <p className="mb-6 text-gray-600">
                Fill out the form below to start your application process. Our admissions team will contact you with
                further instructions.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <Icon icon={CheckCircle} variant="primary" className="mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                    <p className="mb-6 text-gray-600">
                      Thank you for your interest in Horizon College. Our admissions team will contact you shortly.
                    </p>
                    <button onClick={() => setFormSubmitted(false)} className="btn-primary">
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="program" className="block text-sm font-medium mb-1 text-gray-700">
                        Program of Interest *
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a program</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="semester" className="block text-sm font-medium mb-1 text-gray-700">
                        Starting Semester *
                      </label>
                      <select
                        id="semester"
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a semester</option>
                        <option value="Fall 2023">Fall 2023</option>
                        <option value="Spring 2024">Spring 2024</option>
                        <option value="Fall 2024">Fall 2024</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button type="submit" className="btn-primary w-full">
                        Submit Application
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div>
              <h2 className="mb-6">Admission Requirements</h2>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">General Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Completed application form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">High school diploma or equivalent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Official transcripts from all previous institutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Letters of recommendation (2)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Personal statement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Application fee</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Important Dates</h3>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={18} className="text-primary" />
                      <h4 className="font-bold">Fall Semester 2023</h4>
                    </div>
                    <p className="text-gray-600 ml-6">Application Deadline: July 15, 2023</p>
                    <p className="text-gray-600 ml-6">Classes Begin: September 5, 2023</p>
                  </div>
                  <div className="border-b pb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={18} className="text-primary" />
                      <h4 className="font-bold">Spring Semester 2024</h4>
                    </div>
                    <p className="text-gray-600 ml-6">Application Deadline: November 30, 2023</p>
                    <p className="text-gray-600 ml-6">Classes Begin: January 15, 2024</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={18} className="text-primary" />
                      <h4 className="font-bold">Fall Semester 2024</h4>
                    </div>
                    <p className="text-gray-600 ml-6">Application Deadline: July 15, 2024</p>
                    <p className="text-gray-600 ml-6">Classes Begin: September 3, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Financial Aid & Scholarships</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              We are committed to making education accessible. Explore our financial aid options and scholarships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <Icon icon={Award} variant="secondary" className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Merit Scholarships</h3>
              <p className="mb-4 text-gray-600">
                Scholarships awarded based on academic achievement, leadership, and community involvement.
              </p>
              <Link href="#" className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <Icon icon={FileText} variant="secondary" className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Need-Based Aid</h3>
              <p className="mb-4 text-gray-600">
                Financial assistance based on demonstrated financial need and family circumstances.
              </p>
              <Link href="#" className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <Icon icon={Users} variant="secondary" className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Work-Study Programs</h3>
              <p className="mb-4 text-gray-600">
                Opportunities to work on campus while pursuing your degree, gaining valuable experience.
              </p>
              <Link href="#" className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
