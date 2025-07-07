import './App.css'
import { TaskList } from './components/TaskList'
import { TaskMenuFooter } from './components/TaskMenuFooter'
import { TaskMenuHeader } from './components/TaskMenuHeader'

function App() {

  return (
    <>
      <main className='app-main'>
        <h1 className='app-main-title'>ToDo App</h1>
        <div className='app-taskwrapper'>
          <TaskMenuHeader />
          <hr className="app-divider"/>
          <TaskList />
          <hr className="app-divider"/>
          <TaskMenuFooter />
        </div>
      </main>
    </>
  )
}

export default App
