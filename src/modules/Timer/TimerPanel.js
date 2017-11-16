import React from 'react'
import PropTypes from 'prop-types'

import TimerButton from './TimerButton'
import styles from './TimerStyles'

export default function Panel({ pause = false }) {
  return (
    <div style={styles.panel}>
      {pause ? <TimerButton icon="pause" /> : <TimerButton icon="play" />}
      <TimerButton icon="stop" />
      <TimerButton icon="clock-o" />
    </div>
  )
}

Panel.propTypes = {
  pause: PropTypes.bool
}
