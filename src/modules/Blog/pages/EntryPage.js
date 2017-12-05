import React from 'react'
import { Link } from 'react-router-dom'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import withLayout from '../hocs/withLayout'
import withPreloader from '../hocs/withPreloader'

function EntryPage({ entry, relateEntries }) {
  return (
    <div>
      <h1>{entry.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: entry.body }} />

      {relateEntries.map(function (entry) {
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
  connect(({ loading, entry, entries }) => ({ loading, entry, relateEntries: entries })),
  lifecycle({
    fetchEntry(id) {
      document.getElementsByTagName('body')[0].scrollTop = 0

      this.props.dispatch({
        type: 'ENTRY_SET',
        api: {
          url: `http://localhost:3000/posts/${id}`
        }
      })
    },
    fetchRelateEntries() {
      if (this.props.relateEntries.length === 0) {
        this.props.dispatch({
          type: 'ENTRIES_SET',
          api: {
            url: 'http://localhost:3000/posts'
          }
        })
      }
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
