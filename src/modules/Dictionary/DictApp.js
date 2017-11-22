import React from 'react'
import styles from './DictStyles'

import jsonData from './data/eng2thai.json'

function ResultList({ results }) {
  return <ul>{results.map(item => <li>{item.result}</li>)}</ul>
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      keywords: ''
    }

    this.inputHandler = this.inputHandler.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  inputHandler(event) {
    this.setState({
      keywords: event.target.value
    })
  }

  handleFormSubmit() {
    this.props.submitHandler(this.state.keywords)
    this.setState({
      keywords: ''
    })
  }

  render() {
    return (
      <div>
        <input
          placeholder="keywords..."
          value={this.state.keywords}
          onChange={this.inputHandler}
        />
        <button onClick={this.handleFormSubmit}>Search</button>
      </div>
    )
  }
}

function DictApp({ results, submitHandler }) {
  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <SearchForm submitHandler={submitHandler} />
        <ResultList results={results} />
      </div>
    </div>
  )
}

export default class DictContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      results: []
    }

    this.submitHandler = this.submitHandler.bind(this)
  }

  findResults(keywords) {
    return jsonData.filter(word => word.search === keywords)
  }

  submitHandler(keywords) {
    const results = this.findResults(keywords)
    this.setState({
      results
    })
  }

  render() {
    return (
      <DictApp
        results={this.state.results}
        submitHandler={this.submitHandler}
      />
    )
  }
}
