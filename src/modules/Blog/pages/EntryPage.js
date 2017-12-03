import React from 'react'

import Layout from '../components/Layout'

function EntryPage({ entry }) {
  return (
    <Layout>
      <h1>{entry.title}</h1>
      <article>{entry.body}</article>
    </Layout>
  )
}

class EntryPageContainer extends React.Component {
  api = 'http://localhost:3000/posts'

  state = {
    entry: {}
  }

  componentDidMount() {
    this.fetchEntry()
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

  render() {
    return <EntryPage entry={this.state.entry} />
  }
}

export default EntryPageContainer
