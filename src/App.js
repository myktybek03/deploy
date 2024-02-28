import { useState } from 'react'
import './App.css'
import TodoForm from './components/todo-form/TodoForm'
import TodoItem from './components/todo-item/TodoItem'

const oldTodos = [
   { id: 1, text: 'Learn React' },
   { id: 2, text: 'Build a Todo App' },
   { id: 3, text: 'Master React Hooks' },
]

function App() {
   const [todos, setTodos] = useState(oldTodos)

   const handleAddTodo = (text) => {
      const newTodo = {
         id: todos.length + 1,
         text: text,
      }
      setTodos([...todos, newTodo])
   }

   const handleDelete = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
   }
   return (
      <div className="App">
         <h1>Todo App</h1>
         <TodoForm onAddTodo={handleAddTodo} />

         {todos.map((todo) => (
            <TodoItem
               key={todo.id}
               id={todo.id}
               text={todo.text}
               onDelete={handleDelete}
            />
         ))}
      </div>
   )
}

export default App
