import React from 'react'
import PropTypes from 'prop-types'

import styles from './TimerStyles'

export default function TimerCounter({ count = 0 }) {
  console.log('re-render')
  return <div style={styles.counter}>{count}</div>
}

TimerCounter.propTypes = {
  count: PropTypes.number
}
