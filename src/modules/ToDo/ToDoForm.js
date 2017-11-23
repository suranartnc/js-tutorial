import React from 'react'
import styles from './ToDoStyles'

export default class ToDoForm extends React.Component {
  state = {
    title: ''
  }
  handleTitleChanged = event => {
    this.setState({
      title: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      title: ''
    })
    this.props.submitToDo(this.state.title)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            style={styles.todoInput}
            type="text"
            placeholder="Enter your task here..."
            value={this.state.title}
            onChange={this.handleTitleChanged}
          />
        </form>
        <button style={styles.footerFilters.button}>Check all</button>
      </div>
    )
  }
}
