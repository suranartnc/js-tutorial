import React from 'react'

import TimerCounter from './TimerCounter'
import TimerPanel from './TimerPanel'
import TimerLaps from './TimerLaps'
import styles from './TimerStyles'

function TimerApp({ pause, pauseHandler, playHandler }) {
  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <TimerCounter />
        <TimerPanel
          pause={pause}
          pauseHandler={pauseHandler}
          playHandler={playHandler}
        />
        <TimerLaps />
      </div>
    </div>
  )
}

export default class TimerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pause: false
    }

    this.playHandler = this.playHandler.bind(this)
    this.pauseHandler = this.pauseHandler.bind(this)
  }

  playHandler() {
    this.setState({
      pause: true
    })
  }

  pauseHandler() {
    this.setState({
      pause: false
    })
  }

  render() {
    return (
      <TimerApp
        pause={this.state.pause}
        pauseHandler={this.pauseHandler}
        playHandler={this.playHandler}
      />
    )
  }
}
