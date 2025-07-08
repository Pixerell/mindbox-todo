import './App.css'
import { TaskList } from './components/TaskList'
import { TaskMenuFooter } from './components/TaskMenuFooter'
import { TaskMenuHeader } from './components/TaskMenuHeader'
import { useTodoStore } from './hooks/useTodoStore'

function App() {
  const { tasks, allTasks, filter, dispatch } = useTodoStore()

  console.log(tasks)
  return (
    <>
      <main className='app-main'>
        <h1 className='app-main-title'>ToDo App</h1>
        <div className='app-taskwrapper'>
          <TaskMenuHeader dispatch={dispatch}/>
          <hr className="app-divider"/>
          <TaskList tasks={tasks} dispatch={dispatch} />
          <hr className="app-divider"/>
          <TaskMenuFooter 
          dispatch={dispatch} 
          activeCount={allTasks.filter((t) => !t.completed).length}
            currentFilter={filter}
           />
        </div>
      </main>
    </>
  )
}

export default App
