import React from 'react'
import styles from './ToDoStyles'

export default function ToDoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map(function(todo) {
        return <ToDoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      })}
    </ul>
  )
}

function ToDoItem({ todo, removeTodo }) {
  return (
    <li style={styles.todoItem}>
      <input type="checkbox" style={styles.todoItemCheckBox} />
      <span>{todo.title}</span>
      <button onClick={removeTodo} style={styles.todoItemDelete}>
        X
      </button>
    </li>
  )
}
