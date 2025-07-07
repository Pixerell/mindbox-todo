import React from 'react'
import styles from './TaskMenuHeader.module.css'

export const TaskMenuHeader: React.FC = () => {
  return (
    <div className={styles.header}>
        <button className={styles.addButton}>
            <p>Add</p>
        </button>
      <input
        type="text"
        placeholder="What needs to be done?"
        className={styles.input}
      />
    </div>
  )
}
