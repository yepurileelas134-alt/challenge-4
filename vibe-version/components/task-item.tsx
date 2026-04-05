"use client"

import { Check, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

interface TaskItemProps {
  id: string
  title: string
  completed: boolean
  onToggle: (id: string) => void
}

export function TaskItem({ id, title, completed, onToggle }: TaskItemProps) {
  return (
    <div
      className={cn(
        "group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-muted-foreground/30",
        completed && "opacity-60"
      )}
    >
      <button
        onClick={() => onToggle(id)}
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors",
          completed
            ? "border-accent bg-accent text-accent-foreground"
            : "border-muted-foreground/50 text-transparent hover:border-accent"
        )}
        aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {completed ? (
          <Check className="h-3 w-3" />
        ) : (
          <Circle className="h-3 w-3 opacity-0 group-hover:opacity-50" />
        )}
      </button>
      <span
        className={cn(
          "flex-1 text-sm text-foreground transition-all",
          completed && "line-through text-muted-foreground"
        )}
      >
        {title}
      </span>
    </div>
  )
}
