import React from 'react'
import { Link } from 'react-router-dom'

import withLayout from '../hocs/withLayout'
import withPreloader from '../hocs/withPreloader'

function EntryPage({ entry, relateEntries }) {
  return (
    <div>
      <h1>{entry.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: entry.body }} />

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
    </div>
  )
}

const EntryPageWithPreloader = withLayout(withPreloader(EntryPage))

class EntryPageContainer extends React.Component {
  api = 'http://localhost:3000/posts'

  state = {
    loading: false,
    entry: {},
    relateEntries: []
  }

  componentDidMount() {
    this.fetchEntry(this.props.match.params.id)
    this.fetchRelateEntries()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.fetchEntry(nextProps.match.params.id)
    }
  }

  fetchEntry = id => {
    document.getElementsByTagName('body')[0].scrollTop = 0

    this.setState({
      loading: true
    })

    fetch(`${this.api}/${id}/`)
      .then(res => res.json())
      .then(json => {
        setTimeout(() => {
          this.setState({
            loading: false,
            entry: json
          })
        }, 1000)
      })
  }

  fetchRelateEntries = () => {
    fetch(this.api)
      .then(res => res.json())
      .then(json => {
        setTimeout(() => {
          this.setState({
            relateEntries: json
          })
        }, 1000)
      })
  }

  render() {
    return (
      <EntryPageWithPreloader
        loading={this.state.loading}
        entry={this.state.entry}
        relateEntries={this.state.relateEntries}
      />
    )
  }
}

export default EntryPageContainer
