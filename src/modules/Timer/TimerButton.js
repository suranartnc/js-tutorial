import React from 'react'
import PropTypes from 'prop-types'

import styles from './TimerStyles'

export default function TimerButton({ icon }) {
  return (
    <button style={styles.button}>
      <i className={`fa fa-${icon}`} />
    </button>
  )
}

TimerButton.propTypes = {
  icon: PropTypes.string
}
