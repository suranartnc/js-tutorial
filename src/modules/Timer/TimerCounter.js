import React from 'react'
import PropTypes from 'prop-types'

import styles from './TimerStyles'

export default function TimerCounter({ count = 0 }) {
  let parsedCount = count / 100
  return <div style={styles.counter}>{parsedCount}</div>
}

TimerCounter.propTypes = {
  count: PropTypes.number
}
