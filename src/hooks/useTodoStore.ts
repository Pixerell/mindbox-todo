import { useReducer } from 'react';
import { storeReducer, initialState } from '../store/store';
import { FILTERS } from '../types/actiontypes';

export function useTodoStore() {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const visibleTasks = state.tasks.filter((task) => {
    switch (state.filter) {
      case FILTERS.ACTIVE:
        return !task.completed;
      case FILTERS.COMPLETED:
        return task.completed;
      case FILTERS.ALL:
      default:
        return true;
    }
  });
  return {
    tasks: visibleTasks,
    allTasks: state.tasks,
    filter: state.filter,
    dispatch,
  };
}
