import React from 'react';
import styles from './TaskItem.module.css';
import type { TaskItemProps } from '../types/tasktypes';

export const TaskItem: React.FC<TaskItemProps> = ({ id, title, completed, special, onToggle }) => {
  return (
    <div
      className={`${styles.taskitem} ${special ? styles.taskitemSpecial : ''}`}
      onClick={onToggle}
    >
      <label htmlFor={`task-checkbox-${id}`}>
        <input
          id={`task-checkbox-${id}`}
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className={styles.taskitemButton}
          aria-checked={completed}
        />
        <span className={`${completed ? 'taskitem-completed' : ''}`}>{title}</span>
      </label>
    </div>
  );
};
