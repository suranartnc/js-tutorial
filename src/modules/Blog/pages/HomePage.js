import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import withLayout from '../hocs/withLayout'
import withPreloader from '../hocs/withPreloader'

function HomePage({ entryList }) {
  return (
    <div>
      {entryList.map(function(entry) {
        return (
          <h2 key={entry.id}>
            <Link to={`/entry/${entry.id}/`}>{entry.title}</Link>
          </h2>
        )
      })}
    </div>
  )
}

export default compose(
  connect(({ entryList, loading }) => ({ entryList, loading })),
  lifecycle({
    componentDidMount() {
      this.props.dispatch({
        type: 'ENTRIES_SET',
        api: {
          url: 'http://localhost:3000/posts'
        }
      })
    }
  }),
  withLayout,
  withPreloader
)(HomePage)
