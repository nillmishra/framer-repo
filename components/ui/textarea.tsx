import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-24 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 outline-none resize-none",
        "placeholder:text-gray-400",
        "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
        "hover:border-gray-400",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }