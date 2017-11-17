import React from 'react'
import PropTypes from 'prop-types'

import TimerCounter from './TimerCounter'
import TimerPanel from './TimerPanel'
import TimerLaps from './TimerLaps'
import styles from './TimerStyles'

function TimerApp({ pause, count, pauseHandler, playHandler, stopHandler }) {
  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <TimerCounter count={count} />
        <TimerPanel
          pause={pause}
          pauseHandler={pauseHandler}
          playHandler={playHandler}
          stopHandler={stopHandler}
        />
        <TimerLaps />
      </div>
    </div>
  )
}

TimerApp.propTypes = {
  pause: PropTypes.bool,
  count: PropTypes.number,
  pauseHandler: PropTypes.func,
  playHandler: PropTypes.func,
  stopHandler: PropTypes.func
}

export default class TimerContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pause: false,
      count: 0
    }

    this.playHandler = this.playHandler.bind(this)
    this.pauseHandler = this.pauseHandler.bind(this)
    this.stopHandler = this.stopHandler.bind(this)
  }

  playHandler() {
    this.setState({
      pause: true
    })

    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  pauseHandler() {
    this.setState({
      pause: false
    })

    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  stopHandler() {
    this.pauseHandler()
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <TimerApp
        pause={this.state.pause}
        count={this.state.count}
        pauseHandler={this.pauseHandler}
        playHandler={this.playHandler}
        stopHandler={this.stopHandler}
      />
    )
  }
}
