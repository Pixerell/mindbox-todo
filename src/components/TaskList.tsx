import React from 'react'
import { TaskItem } from './TaskItem'
import styles from './TaskList.module.css'

const mockTasks = [
  { id: '1', title: 'Buy milk', completed: false },
  { id: '2', title: 'Finish test task', completed: true },
]

export const TaskList: React.FC = () => {
  return (
    <div className={styles.tasklist}>
      {mockTasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </div>
  )
}
