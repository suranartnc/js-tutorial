import React from 'react'
import PropTypes from 'prop-types'

function Counter({ count = 0 }) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000',
    textAlign: 'center',
    border: '5px solid #bf2615',
    borderRadius: '50%',
    fontSize: '6rem',
    width: '220px',
    height: '220px',
    margin: '0 auto',
    color: '#fff'
  }
  return <div style={style}>{count}</div>
}

Counter.propTypes = {
  count: PropTypes.number
}

function Button({ icon }) {
  const style = {
    cursor: 'pointer',
    border: '0',
    width: '64px',
    height: '64px',
    padding: '5px',
    backgroundColor: '#000',
    fontWeight: 'bold',
    fontSize: '2.4rem',
    color: '#bf2615'
  }
  return (
    <button style={style}>
      <i className={`fa fa-${icon}`} />
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.string
}

function Panel({ pause = false }) {
  const style = {
    display: 'flex',
    justifyContent: 'space-around'
  }
  return (
    <div style={style}>
      {pause ? <Button icon="pause" /> : <Button icon="play" />}
      <Button icon="stop" />
      <Button icon="clock-o" />
    </div>
  )
}

Panel.propTypes = {
  pause: PropTypes.bool
}

export default class TimerContainer extends React.Component {
  render() {
    const style = {
      app: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%'
      },
      wrapper: {
        display: 'flex',
        maxWidth: '320px',
        margin: '0 auto',
        height: '100%',
        padding: '50px',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }
    }
    return (
      <div style={style.app}>
        <div style={style.wrapper}>
          <Counter />
          <Panel />
        </div>
      </div>
    )
  }
}
