
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButtom } from './components/CreateTodoButtom'
import './assets/css/app.css'
function App() {

  return (
    <div className='container'>
      <div className='card'>
        <TodoCounter complete={3} total={10} />
        <TodoSearch />
        <TodoList>
          <TodoItem title={"Hacer licuado"} />
        </TodoList>
        <CreateTodoButtom />
      </div>
    </div>
  )
}

export default App
