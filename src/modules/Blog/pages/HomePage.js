import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

function HomePage({ entries }) {
  return (
    <Layout>
      {entries.map(function(entry) {
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

class HomePageContainer extends React.Component {
  api = 'http://localhost:3000/posts'

  state = {
    entries: []
  }

  componentDidMount() {
    this.fetchEntries()
  }

  fetchEntries = () => {
    fetch(this.api)
      .then(res => res.json())
      .then(json => {
        this.setState({
          entries: json
        })
      })
  }

  render() {
    return <HomePage entries={this.state.entries} />
  }
}

export default HomePageContainer
