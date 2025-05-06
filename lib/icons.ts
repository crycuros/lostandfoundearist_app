import {
  BookOpen,
  Code,
  Server,
  Shield,
  Database,
  Brain,
  Users,
  Award,
  Lightbulb,
  ChevronRight,
  ArrowRight,
  Calendar,
  FileText,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Menu,
  X,
  ChevronUp,
  type LucideIcon,
} from "lucide-react"

// Group icons by category for easier reference
export const icons = {
  // Navigation
  menu: Menu,
  close: X,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,

  // Academic
  bookOpen: BookOpen,
  code: Code,
  server: Server,
  shield: Shield,
  database: Database,
  brain: Brain,

  // Features
  users: Users,
  award: Award,
  lightbulb: Lightbulb,

  // Contact & Info
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  clock: Clock,
  calendar: Calendar,
  fileText: FileText,
  checkCircle: CheckCircle,

  // Social
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  globe: Globe,
}

export type IconName = keyof typeof icons

// Helper function to get icon by name
export function getIcon(name: IconName): LucideIcon {
  return icons[name]
}

export default icons
