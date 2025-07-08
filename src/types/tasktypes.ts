import type { FILTERS } from "./actiontypes"

export type TaskItemProps = {
  id: number
  title: string
  completed: boolean
  onToggle?: () => void
}

export type Filter = typeof FILTERS[keyof typeof FILTERS]