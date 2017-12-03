import React from 'react'
import { Link } from 'react-router-dom'
import { compose, withState, lifecycle } from 'recompose'

import withLayout from '../hocs/withLayout'
import withPreloader from '../hocs/withPreloader'

const api = 'http://localhost:3000/posts'

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

const EnhancedEntryPage = compose(
  withState('loading', 'setLoading', false),
  withState('entry', 'setEntry', {}),
  withState('relateEntries', 'setRelateEntries', []),
  lifecycle({
    fetchEntry(id) {
      document.getElementsByTagName('body')[0].scrollTop = 0

      this.props.setLoading(true)

      fetch(`${api}/${id}/`)
        .then(res => res.json())
        .then(json => {
          setTimeout(() => {
            this.props.setLoading(false)
            this.props.setEntry(json)
          }, 1000)
        })
    },
    fetchRelateEntries() {
      fetch(api)
        .then(res => res.json())
        .then(json => {
          setTimeout(() => {
            this.props.setRelateEntries(json)
          }, 1000)
        })
    },
    componentDidMount() {
      this.fetchEntry(this.props.match.params.id)
      this.fetchRelateEntries()
    },
    componentWillReceiveProps(nextProps) {
      if (nextProps.match.params.id !== this.props.match.params.id) {
        this.fetchEntry(nextProps.match.params.id)
      }
    }
  }),
  withLayout,
  withPreloader
)(EntryPage)

export default EnhancedEntryPage
