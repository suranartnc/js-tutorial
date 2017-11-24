import React from 'react'
import styles from './ToDoStyles'

export default function ToDoList({ todos, filter, removeTodo, completeTask }) {
  return (
    <ul>
      {todos
        .filter(function(todo) {
          if (filter === 'active') {
            return todo.completed === false
          }
          if (filter === 'completed') {
            return todo.completed === true
          }
          return todo
        })
        .map(function(todo) {
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
        checked={todo.completed}
      />
      <span>{todo.title}</span>
      <button onClick={removeTodo(todo.id)} style={styles.todoItemDelete}>
        X
      </button>
    </li>
  )
}
