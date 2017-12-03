import React from 'react'

function withPreloader(WrappedComponent) {
  return class WrappedComponentWithPreloader extends React.Component {
    render() {
      if (this.props.loading) return 'Loading...'

      return <WrappedComponent {...this.props} />
    }
  }
}

export default withPreloader
