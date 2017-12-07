import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class EntryPage extends React.Component {
  fetchData(id) {
    document.getElementsByTagName('body')[0].scrollTop = 0

    this.props.dispatch({
      type: 'ENTRY_SET',
      api: {
        url: `http://localhost:3000/posts/${id}/`
      }
    })

    this.props.dispatch({
      type: 'ENTRIES_SET',
      api: {
        url: 'http://localhost:3000/posts'
      }
    })
  }

  componentDidMount() {
    this.fetchData(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id === this.props.match.params.id) {
      return
    }

    this.fetchData(nextProps.match.params.id)
  }

  render() {
    const { loading, entryDetail } = this.props

    if (loading === true) {
      return <div>Loading....</div>
    }

    return (
      <div>
        <h1>{entryDetail.title}</h1>
        <p>&nbsp;</p>
        <article>
          <p dangerouslySetInnerHTML={{ __html: entryDetail.body }} />
        </article>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <div>
          {this.props.entryList.map(function(entry) {
            return (
              <h2 key={entry.id}>
                <Link to={`/entry/${entry.id}/`}>{entry.title}</Link>
              </h2>
            )
          })}
        </div>
      </div>
    )
  }
}

export default connect(({ loading, entryDetail, entryList }) => ({
  loading,
  entryDetail,
  entryList
}))(EntryPage)
