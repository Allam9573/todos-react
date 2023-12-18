
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButtom } from './components/CreateTodoButtom'
import './assets/css/app.css'
import { useState } from 'react'
function App() {

  let todo ='hola'
  const [complete, setComplete] = useState(true)


  return (
    <div className='container'>
      <div className='card'>
        <TodoCounter complete={3} total={10} />
        <TodoSearch />
        <TodoList>
          <TodoItem key={todo.text} text={todo.text} completed={true}  />
        </TodoList>
        <CreateTodoButtom />
      </div>
    </div>
  )
}

export default App
