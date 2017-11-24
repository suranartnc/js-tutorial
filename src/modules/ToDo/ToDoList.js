import React from 'react'
import styles from './ToDoStyles'

export default function ToDoList({ todos, removeTodo, completeTask }) {
  return (
    <ul>
      {todos.map(function(todo) {
        return (
          <ToDoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTask={completeTask}
          />
        )
      })}
    </ul>
  )
}

function ToDoItem({ todo, removeTodo, completeTask }) {
  return (
    <li style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.todoItemCheckBox}
        onChange={completeTask(todo.id)}
      />
      <span>{todo.title}</span>
      <button onClick={removeTodo(todo.id)} style={styles.todoItemDelete}>
        X
      </button>
    </li>
  )
}
