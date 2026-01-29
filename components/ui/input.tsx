import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-xl border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 shadow-sm transition-all duration-200 outline-none",
        "placeholder:text-gray-400",
        "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
        "hover:border-gray-400",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100",
        "file:inline-flex file:h-8 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-blue-600",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }