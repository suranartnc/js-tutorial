import React from 'react'

export default function withPreloader(WrappedComponent) {
  return class WrappedComponentWithLayout extends React.Component {
    render() {
      return (
        <div>
          {this.props.loading && 'Loading...'}
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}
