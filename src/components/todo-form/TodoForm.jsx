import React, { useRef } from 'react'
import styles from './TodoForm.module.css'

const TodoForm = ({ onAddTodo }) => {
   const inputRef = useRef(null)
   const handleSubmit = (e) => {
      e.preventDefault()
      const newTodoValue = inputRef.current.value.trim()

      if (newTodoValue !== '') {
         onAddTodo(newTodoValue)
         inputRef.current.vlue = ''
      }
   }

   return (
      <div className={styles.formContainer}>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               className={styles.inputField}
               ref={inputRef}
               placeholder="new todo..."
            />
            <button type="submit" className={styles.addButton}>
               Add Todo
            </button>
         </form>
      </div>
   )
}

export default TodoForm

// import React, { useState } from 'react'
// import styles from './TodoForm.module.css'

// const TodoForm = ({ onAddTodo }) => {
//    const [newTodo, setNewTodo] = useState('')

//    const handleChange = (e) => {
//       setNewTodo(e.target.value)
//    }

//    const handleSubmit = (e) => {
//       e.preventDefault()
//       if (newTodo.trim() !== '') {
//          onAddTodo(newTodo)
//          setNewTodo('')
//       }
//    }

//    return (
//       <div className={styles.formContainer}>
//          <form onSubmit={handleSubmit}>
//             <input
//                type="text"
//                className={styles.inputField}
//                value={newTodo}
//                onChange={handleChange}
//                placeholder="new todo..."
//             />
//             <button type="submit" className={styles.addButton}>
//                Add Todo
//             </button>
//          </form>
//       </div>
//    )
// }

// export default TodoForm
