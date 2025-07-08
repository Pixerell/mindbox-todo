import React from 'react';
import { TaskItem } from './TaskItem';
import styles from './TaskList.module.css';
import type { TaskListProps } from '../types/componentprops';
import { TOGGLE_TASK } from '../types/actiontypes';

export const TaskList: React.FC<TaskListProps> = ({ tasks, dispatch }) => {
  return (
    <div className={styles.tasklist}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          special={task.special}
          completed={task.completed}
          onToggle={() => dispatch({ type: TOGGLE_TASK, id: task.id })}
        />
      ))}
    </div>
  );
};
