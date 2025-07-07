import React from 'react'
import styles from './TaskItem.module.css'

type TaskItemProps = {
  id: string
  title: string
  completed: boolean
  onToggle?: () => void
  onDelete?: () => void
}

export const TaskItem: React.FC<TaskItemProps> = ({
  title,
  completed,
  onToggle,
}) => {
  return (
    <div className={styles.taskitem}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className={styles.taskitemButton}
        />
        <span className={completed ? 'taskitem-completed' : ''}>
          {title}
        </span>
      </label>
    </div>
  )
}
