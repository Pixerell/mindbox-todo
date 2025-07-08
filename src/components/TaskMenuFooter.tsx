import React from 'react'
import styles from './TaskMenuFooter.module.css'
import type { TaskMenuFooterProps } from '../types/componentprops'
import { CLEAR_COMPLETED, FILTERS, SET_FILTER } from '../types/actiontypes'
import type { Filter } from '../types/tasktypes'

export const TaskMenuFooter: React.FC<TaskMenuFooterProps> = ({
  dispatch,
  activeCount,
  currentFilter,
}) => {

  const filters = Object.values(FILTERS) as Filter[]
  
  return (
    <div className={styles.footer}>
            <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={filter === currentFilter ? styles.activeF : ''}
            onClick={() => dispatch({ type: SET_FILTER, filter })}
          >
            {filter[0] + filter.slice(1).toLowerCase()}
          </button>
        ))}
      </div>
      <button 
      className={styles.clearButton}
      onClick={() => dispatch({ type: CLEAR_COMPLETED })}
      >Clear completed</button>
    </div>
  )
}
