import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow-md shadow-blue-600/25 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-red-600 text-white shadow-md shadow-red-600/25 hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 shadow-sm",
        secondary:
          "bg-blue-100 text-blue-700 hover:bg-blue-200 shadow-sm",
        ghost:
          "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        link:
          "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700",
        glass:
          "bg-white/80 backdrop-blur-lg border border-white/30 text-gray-800 hover:bg-white/90 shadow-lg",
        gradient:
          "text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
        nav:
          "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-lg gap-1.5 px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-lg font-bold",
        icon: "size-10 rounded-xl",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }