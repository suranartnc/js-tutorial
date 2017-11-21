import React from 'react'
import styles from './DictStyles'

import jsonData from './data/eng2thai.json'

function ResultList({ results }) {
  return <ul>{results.map(item => <li>{item.result}</li>)}</ul>
}

function DictApp({ keywords, results, inputHandler, submitHandler }) {
  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <input
          placeholder="keywords..."
          value={keywords}
          onChange={inputHandler}
        />
        <button onClick={submitHandler}>Search</button>
        <ResultList results={results} />
      </div>
    </div>
  )
}

export default class DictContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      keywords: '',
      results: []
    }

    this.inputHandler = this.inputHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  inputHandler(event) {
    this.setState({
      keywords: event.target.value
    })
  }

  findResults(keywords) {
    return jsonData.filter(word => word.search === keywords)
  }

  submitHandler() {
    const results = this.findResults(this.state.keywords)
    this.setState({ results })
  }

  render() {
    return (
      <DictApp
        keywords={this.state.keywords}
        results={this.state.results}
        inputHandler={this.inputHandler}
        submitHandler={this.submitHandler}
      />
    )
  }
}
