import React from 'react'
import PropTypes from 'prop-types'

export default class Route extends React.Component {
  render() {
    const { path, component: Component } = this.props

    return (
      <div>{path === this.context.getCurrentLocation() && <Component />}</div>
    )
  }
}

Route.contextTypes = {
  getCurrentLocation: PropTypes.func
}
