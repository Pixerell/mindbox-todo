import type { Action } from '../store/store'
import type { Filter, TaskItemProps } from './tasktypes'

export type TaskMenuHeaderProps = {
  dispatch: React.Dispatch<Action>
}

export type TaskListProps = {
  tasks: TaskItemProps[]
  dispatch: React.Dispatch<Action>
}

export type TaskMenuFooterProps = {
  dispatch: React.Dispatch<Action>
  activeCount: number
  currentFilter: Filter
}