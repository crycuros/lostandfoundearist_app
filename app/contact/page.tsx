"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"
import Icon from "@/components/ui/icon"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl">
              Have questions? We're here to help. Reach out to us using the contact information below or fill out the
              form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Get in Touch</h2>
              <p className="mb-8 text-gray-600">
                We're always happy to hear from prospective students, parents, alumni, and community members. Feel free
                to reach out with any questions or inquiries.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon icon={MapPin} variant="primary" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Address</h3>
                    <p className="text-gray-600">123 University Ave, College Town, CT 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon icon={Phone} variant="primary" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">Main: (123) 456-7890</p>
                    <p className="text-gray-600">Admissions: (123) 456-7891</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon icon={Mail} variant="primary" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-gray-600">info@horizoncollege.edu</p>
                    <p className="text-gray-600">admissions@horizoncollege.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon icon={Clock} variant="primary" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM (Admissions Only)</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6">Send Us a Message</h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <Icon icon={CheckCircle} variant="primary" className="mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="mb-6 text-gray-600">
                      Thank you for contacting Horizon College. We'll get back to you as soon as possible.
                    </p>
                    <button onClick={() => setFormSubmitted(false)} className="btn-primary">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
                        Your Name *
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
                      <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-700">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button type="submit" className="btn-primary w-full">
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Visit Our Campus</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              We invite you to visit our beautiful campus and experience Horizon College firsthand.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video w-full h-full bg-gray-200 flex items-center justify-center rounded-md">
              <MapPin size={48} className="text-primary opacity-50" />
              <span className="sr-only">Map Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-gray-600">Find answers to common questions about Horizon College.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">What are the application deadlines?</h3>
                <p className="text-gray-600">
                  For the Fall semester, applications are due by July 15. For the Spring semester, applications are due
                  by November 30.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Are campus tours available?</h3>
                <p className="text-gray-600">
                  Yes, we offer campus tours Monday through Friday at 10:00 AM and 2:00 PM, and on Saturdays at 11:00
                  AM. Please contact our admissions office to schedule a tour.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">What financial aid options are available?</h3>
                <p className="text-gray-600">
                  We offer a variety of financial aid options, including merit scholarships, need-based aid, and
                  work-study programs. Visit our Financial Aid page for more information.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">How can I request more information about specific programs?</h3>
                <p className="text-gray-600">
                  You can use the contact form on this page to request information about specific programs, or you can
                  contact our admissions office directly at admissions@horizoncollege.edu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
