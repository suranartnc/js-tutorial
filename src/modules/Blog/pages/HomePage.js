import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'ENTRIES_SET',
      api: {
        url: 'http://localhost:3000/posts'
      }
    })
  }

  render() {
    return (
      <div>
        {this.props.entryList.map(function(entry) {
          return (
            <h2 key={entry.id}>
              <Link to={`/entry/${entry.id}/`}>{entry.title}</Link>
            </h2>
          )
        })}
      </div>
    )
  }
}

export default connect(({ entryList }) => ({ entryList }))(HomePage)
