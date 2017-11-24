import React from 'react'

const styles = {
  body: {
    backgroundColor: '#eee',
    width: '100%',
    height: '100%'
  },
  wrapper: {
    display: 'flex',
    maxWidth: '600px',
    margin: 'auto',
    height: '100%',
    padding: '50px',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  }
}

export default function AppWrapper({ children }) {
  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>{children}</div>
    </div>
  )
}
