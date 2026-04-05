"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { AddTaskForm } from "./add-task-form"
import { FilterTabs, type Filter } from "./filter-tabs"
import { TaskItem } from "./task-item"

interface Task {
  id: string
  title: string
  completed: boolean
}

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<Filter>("all")

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  const counts = {
    all: tasks.length,
    active: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  }

  return (
    <div className="mx-auto w-full max-w-lg space-y-6">
      <header className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Tasks
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Stay organized and get things done
        </p>
      </header>

      <AddTaskForm onAdd={addTask} />

      <FilterTabs
        activeFilter={filter}
        onFilterChange={setFilter}
        counts={counts}
      />

      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-12 text-center">
            <CheckCircle2 className="h-10 w-10 text-muted-foreground/50" />
            <p className="mt-3 text-sm text-muted-foreground">
              {filter === "all"
                ? "No tasks yet. Add one above!"
                : filter === "active"
                ? "No active tasks"
                : "No completed tasks"}
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              onToggle={toggleTask}
            />
          ))
        )}
      </div>
    </div>
  )
}
