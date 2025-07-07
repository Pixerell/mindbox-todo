import React from 'react'
import styles from './TaskMenuFooter.module.css'

export const TaskMenuFooter: React.FC = () => {
  return (
    <div className={styles.footer}>
      <span>2 items left</span>
      <div className={styles.filters}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button className={styles.clearButton}>Clear completed</button>
    </div>
  )
}
