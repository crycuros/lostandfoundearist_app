import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Horizon College</h3>
            <p className="mb-4 text-gray-300">
              Empowering minds, shaping futures. Join our community of learners and innovators.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-300 hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academics#computer-science" className="text-gray-300 hover:text-white transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#information-technology"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Information Technology
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-300 hover:text-white transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-300 hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-300 hover:text-white transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-gray-300" />
                <span className="text-gray-300">123 University Ave, College Town, CT 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0 text-gray-300" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="flex-shrink-0 text-gray-300" />
                <span className="text-gray-300">info@horizoncollege.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Horizon College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
