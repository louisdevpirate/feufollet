import * as React from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-provider"

export interface ThemedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

const ThemedButton = React.forwardRef<HTMLButtonElement, ThemedButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const { theme } = useTheme()
    
    const getVariantClasses = () => {
      switch (variant) {
        case "primary":
          return theme.ctaPrimary || "bg-primary text-white hover:bg-primary/90"
        case "secondary":
          return theme.ctaSecondary || "border-2 border-primary text-primary hover:bg-primary hover:text-white"
        case "outline":
          return "border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
        default:
          return "bg-primary text-white hover:bg-primary/90"
      }
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "px-3 py-2 text-sm": size === "sm",
            "px-4 py-2 text-base": size === "md", 
            "px-6 py-3 text-lg": size === "lg",
          },
          getVariantClasses(),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
ThemedButton.displayName = "ThemedButton"

export { ThemedButton }
