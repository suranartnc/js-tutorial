import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import withLayout from '../hocs/withLayout'
import withPreloader from '../hocs/withPreloader'

import EntryPage from './EntryPage'

export default compose(
  connect(({ loading, entryDetail, entryList }) => ({
    loading,
    entryDetail,
    entryList
  })),
  lifecycle({
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
    },
    componentDidMount() {
      this.fetchData(this.props.match.params.id)
    },
    componentWillReceiveProps(nextProps) {
      if (nextProps.match.params.id === this.props.match.params.id) {
        return
      }

      this.fetchData(nextProps.match.params.id)
    }
  }),
  withLayout,
  withPreloader
)(EntryPage)
