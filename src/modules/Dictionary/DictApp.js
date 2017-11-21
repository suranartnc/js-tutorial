import React from 'react'
import styles from './DictStyles'

function ResultList({ results }) {
  return <ul>{results.map(item => <li>{item.result}</li>)}</ul>
}

function DictApp({ keywords, results, inputHandler }) {
  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <input
          placeholder="keywords..."
          value={keywords}
          onChange={inputHandler}
        />
        <button>Search</button>
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
      results: [
        {
          result: 'กิน'
        }
      ]
    }

    this.inputHandler = this.inputHandler.bind(this)
  }

  inputHandler(event) {
    this.setState({
      keywords: event.target.value
    })
  }

  render() {
    return (
      <DictApp
        keywords={this.state.keywords}
        results={this.state.results}
        inputHandler={this.inputHandler}
      />
    )
  }
}
