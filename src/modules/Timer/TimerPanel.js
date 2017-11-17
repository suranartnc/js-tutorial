import React from 'react'
import PropTypes from 'prop-types'

import TimerButton from './TimerButton'
import styles from './TimerStyles'

export default function Panel({
  pause = false,
  playHandler,
  pauseHandler,
  stopHandler,
  lapHandler
}) {
  return (
    <div style={styles.panel}>
      {pause ? (
        <TimerButton icon="pause" handler={pauseHandler} />
      ) : (
        <TimerButton icon="play" handler={playHandler} />
      )}
      <TimerButton icon="stop" handler={stopHandler} />
      <TimerButton icon="clock-o" handler={lapHandler} />
    </div>
  )
}

Panel.propTypes = {
  pause: PropTypes.bool,
  playHandler: PropTypes.func,
  pauseHandler: PropTypes.func,
  stopHandler: PropTypes.func,
  lapHandler: PropTypes.func
}
