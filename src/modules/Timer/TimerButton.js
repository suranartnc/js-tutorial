import React from 'react'
import PropTypes from 'prop-types'

import styles from './TimerStyles'

export default function TimerButton({ icon, handler }) {
  return (
    <button style={styles.button} onClick={handler}>
      <i className={`fa fa-${icon}`} />
    </button>
  )
}

TimerButton.propTypes = {
  icon: PropTypes.string,
  handler: PropTypes.func
}
