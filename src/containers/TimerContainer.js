import React from 'react'

function Counter({ count = 0 }) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00bfff',
    textAlign: 'center',
    border: '10px solid #fff',
    borderRadius: '50%',
    fontSize: '6rem',
    width: '220px',
    height: '220px',
    margin: '0 auto',
    color: '#fff'
  }
  return (
    <div style={style}>
      <p>{count}</p>
    </div>
  )
}

function Button({ label = 'Submit' }) {
  const style = {
    borderRadius: '50%',
    width: '64px',
    height: '64px',
    padding: '5px',
    backgroundColor: '#fff',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#00bfff'
  }
  return <button style={style}>{label}</button>
}

function Panel() {
  const style = {
    display: 'flex',
    justifyContent: 'space-around'
  }
  return (
    <div style={style}>
      <Button label="Start" />
      <Button label="Lap" />
      <Button label="Reset" />
    </div>
  )
}

export default class TimerContainer extends React.Component {
  render() {
    const style = {
      display: 'flex',
      height: '100%',
      padding: '50px',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00bfff'
    }
    return (
      <div style={style}>
        <Counter />
        <Panel />
      </div>
    )
  }
}
