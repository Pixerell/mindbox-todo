import { FILTERS } from '../types/actiontypes';
import type { TaskItemProps, Filter } from '../types/tasktypes';
import { ADD_TASK, TOGGLE_TASK, CLEAR_COMPLETED, SET_FILTER } from '../types/actiontypes';

export type Action =
  | { type: typeof ADD_TASK; title: string }
  | { type: typeof TOGGLE_TASK; id: number }
  | { type: typeof CLEAR_COMPLETED }
  | { type: typeof SET_FILTER; filter: Filter };

type State = {
  tasks: TaskItemProps[];
  filter: Filter;
  nextId: number;
};

const initialTasks = [
  {
    id: 1,
    title: 'Test task 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Test task 2',
    completed: true,
  },
];

const nextId =
  initialTasks.length > 0 ? Math.max(...initialTasks.map((task) => Number(task.id))) + 1 : 1;

export const initialState: State = {
  tasks: initialTasks,
  filter: FILTERS.ALL,
  nextId,
};

export function storeReducer(state: State, action: Action): State {
  switch (action.type) {
    case ADD_TASK: {
      const rawTitle = action.title.trim();
      const isLilya = /(лилия|лиля|liliya|lilya)/i.test(rawTitle);
      const isLesha = /(л[её]ша|alex)/i.test(rawTitle);

      if (!rawTitle) return state;

      let finalTitle = rawTitle;
      let isSpecial = false;

      if (isLilya && isLesha) {
        finalTitle = '💗 лиля + лёша = любовь 💗';
        isSpecial = true;
      } else if (isLilya) {
        finalTitle = 'лиля это не задача 😊. лиля это лав 💗';
        isSpecial = true;
      } else if (isLesha) {
        finalTitle = 'ну такую задачу дано решить не каждому 😎';
        isSpecial = true;
      }

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.nextId,
            title: finalTitle,
            completed: false,
            special: isSpecial,
          },
        ],
        nextId: state.nextId + 1,
      };
    }

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
        ),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.completed),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}
