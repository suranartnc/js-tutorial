import React from 'react'
import PropTypes from 'prop-types'

import styles from './TimerStyles'

export default function TimerLaps({ laps = [] }) {
  return (
    <div style={styles.laps}>
      <ul>{laps.map((lap, index) => <li key={index}>{lap}</li>)}</ul>
    </div>
  )
}

TimerLaps.propTypes = {
  laps: PropTypes.array
}
