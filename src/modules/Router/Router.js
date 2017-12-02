import React from 'react'
import PropTypes from 'prop-types'

class Router extends React.Component {
  state = {
    location: '/'
  }

  getChildContext() {
    return {
      transitionTo: this.transitionTo,
      getCurrentLocation: this.getCurrentLocation
    }
  }

  transitionTo = url => e => {
    e.preventDefault()

    history.pushState({}, '', url)

    this.setState({
      location: url
    })
  }

  getCurrentLocation = () => {
    return this.state.location
  }

  componentDidMount() {
    this.setState({
      location: window.location.pathname
    })
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

Router.childContextTypes = {
  transitionTo: PropTypes.func,
  getCurrentLocation: PropTypes.func
}

export default Router
