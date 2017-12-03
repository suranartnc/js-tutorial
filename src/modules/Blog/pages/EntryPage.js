import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

function EntryPage({ entry, relateEntries }) {
  return (
    <Layout>
      <h1>{entry.title}</h1>
      <article>{entry.body}</article>

      {relateEntries.map(function(entry) {
        return (
          <article key={entry.id}>
            <h2>
              <Link to={`/entry/${entry.id}/`}>{entry.title}</Link>
            </h2>
            <p>{entry.excerpt}</p>
          </article>
        )
      })}
    </Layout>
  )
}

class EntryPageContainer extends React.Component {
  api = 'http://localhost:3000/posts'

  state = {
    entry: {},
    relateEntries: []
  }

  componentDidMount() {
    this.fetchEntry()
    this.fetchRelateEntries()
  }

  fetchEntry = () => {
    const id = this.props.match.params.id

    fetch(`${this.api}/${id}/`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          entry: json
        })
      })
  }

  fetchRelateEntries = () => {
    fetch(this.api)
      .then(res => res.json())
      .then(json => {
        this.setState({
          relateEntries: json
        })
      })
  }

  render() {
    return (
      <EntryPage
        entry={this.state.entry}
        relateEntries={this.state.relateEntries}
      />
    )
  }
}

export default EntryPageContainer
