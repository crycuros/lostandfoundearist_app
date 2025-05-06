import type { LucideIcon } from "lucide-react"

interface IconProps {
  icon: LucideIcon
  size?: number
  className?: string
  variant?: "primary" | "secondary" | "outline" | "none"
}

export default function Icon({ icon: LucideIcon, size = 24, className = "", variant = "primary" }: IconProps) {
  const variantClasses = {
    primary: "icon-container icon-primary",
    secondary: "icon-container icon-secondary",
    outline: "icon-container border border-gray-300",
    none: "",
  }

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      <LucideIcon size={size} />
    </div>
  )
}
