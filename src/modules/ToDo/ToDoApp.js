import React from 'react'
import styles from './ToDoStyles'

function ToDoApp() {
  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>To-Do App</div>
    </div>
  )
}

export default class ToDoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <ToDoApp />
  }
}
