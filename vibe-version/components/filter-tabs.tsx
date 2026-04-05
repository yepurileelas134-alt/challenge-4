"use client"

import { cn } from "@/lib/utils"

export type Filter = "all" | "active" | "completed"

interface FilterTabsProps {
  activeFilter: Filter
  onFilterChange: (filter: Filter) => void
  counts: {
    all: number
    active: number
    completed: number
  }
}

export function FilterTabs({ activeFilter, onFilterChange, counts }: FilterTabsProps) {
  const tabs: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ]

  return (
    <div className="flex gap-1 rounded-lg bg-secondary p-1">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onFilterChange(tab.value)}
          className={cn(
            "flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
            activeFilter === tab.value
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {tab.label}
          <span className="ml-1.5 text-xs text-muted-foreground">
            {counts[tab.value]}
          </span>
        </button>
      ))}
    </div>
  )
}
