import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from '../components/Layout'

function HomePage({ entries }) {
  return (
    <Layout>
      {entries.map(function (entry) {
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
  componentDidMount() {
    if (this.props.entries.length === 0) {
      this.props.dispatch({
        type: 'ENTRIES_SET',
        api: {
          url: 'http://localhost:3000/posts'
        }
      })
    }
  }

  render() {
    return <HomePage entries={this.props.entries} />
  }
}

export default connect(({ entries }) => ({ entries }))(HomePageContainer)
