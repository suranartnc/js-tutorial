import React from 'react'

import TimerCounter from './TimerCounter'
import TimerPanel from './TimerPanel'
import styles from './TimerStyles'

function TimerApp() {
  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <TimerCounter />
        <TimerPanel />
      </div>
    </div>
  )
}

export default class TimerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <TimerApp />
  }
}
