import React, { useState} from 'react'  
import type { KeyboardEvent } from 'react'
import styles from './TaskMenuHeader.module.css'
import type { TaskMenuHeaderProps } from '../types/componentprops'
import { ADD_TASK } from '../types/actiontypes'

export const TaskMenuHeader: React.FC<TaskMenuHeaderProps> = ({dispatch}) => {
  
  const [title, setTitle] = useState('')

  const addTask = () => {
    if (title.trim()) {
      dispatch({type: ADD_TASK, title: title.trim()})
      setTitle('')
    }
  }
  
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className={styles.header}>
        <button className={styles.addButton} onClick={addTask}>
            <p>Add</p>
        </button>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}  
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}
