import React from 'react'
import styles from './ToDoStyles'

export default function ToDoFooter({ todos, clearCompleted, filterTasks }) {
  const itemsLeft = todos.filter(function(todo) {
    return todo.completed === false
  }).length

  return (
    <div style={styles.footer.container}>
      <p style={styles.footer.itemsLeft}>{itemsLeft} items left</p>
      <ToDoFooterFilters filterTasks={filterTasks} />
      <button style={styles.footerFilters.button} onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  )
}

function ToDoFooterFilters({ filterTasks }) {
  return (
    <div style={styles.footerFilters.container}>
      <button onClick={filterTasks} style={styles.footerFilters.button}>
        All
      </button>
      <button onClick={filterTasks} style={styles.footerFilters.button}>
        Active
      </button>
      <button onClick={filterTasks} style={styles.footerFilters.button}>
        Completed
      </button>
    </div>
  )
}
