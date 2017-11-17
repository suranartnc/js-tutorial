import React from 'react'
import PropTypes from 'prop-types'

import TimerCounter from './TimerCounter'
import TimerPanel from './TimerPanel'
import TimerLaps from './TimerLaps'
import styles from './TimerStyles'

function TimerApp({
  pause,
  count,
  laps,
  pauseHandler,
  playHandler,
  stopHandler,
  lapHandler
}) {
  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <TimerCounter count={count} />
        <TimerPanel
          pause={pause}
          pauseHandler={pauseHandler}
          playHandler={playHandler}
          stopHandler={stopHandler}
          lapHandler={lapHandler}
        />
        <TimerLaps laps={laps} />
      </div>
    </div>
  )
}

TimerApp.propTypes = {
  pause: PropTypes.bool,
  count: PropTypes.number,
  laps: PropTypes.array,
  pauseHandler: PropTypes.func,
  playHandler: PropTypes.func,
  stopHandler: PropTypes.func,
  lapHandler: PropTypes.func
}

export default class TimerContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pause: false,
      count: 0,
      laps: []
    }

    this.playHandler = this.playHandler.bind(this)
    this.pauseHandler = this.pauseHandler.bind(this)
    this.stopHandler = this.stopHandler.bind(this)
    this.lapHandler = this.lapHandler.bind(this)
  }

  playHandler() {
    this.setState({
      pause: true
    })

    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 10)
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
      count: 0,
      laps: []
    })
  }

  lapHandler() {
    this.setState({
      laps: this.state.laps.concat([this.state.count / 100])
    })
  }

  render() {
    return (
      <TimerApp
        pause={this.state.pause}
        count={this.state.count}
        laps={this.state.laps}
        pauseHandler={this.pauseHandler}
        playHandler={this.playHandler}
        stopHandler={this.stopHandler}
        lapHandler={this.lapHandler}
      />
    )
  }
}
