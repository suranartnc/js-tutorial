import React from 'react'
import PropTypes from 'prop-types'

export default class Link extends React.Component {
  render() {
    const { to, children } = this.props

    return (
      <a href={to} onClick={this.context.transitionTo(to)}>
        {children}
      </a>
    )
  }
}

Link.contextTypes = {
  transitionTo: PropTypes.func
}
