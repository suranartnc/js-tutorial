import React from 'react'

function Container({ style, title, color }) {
  const styleApplied = {
    width: '100%',
    height: 300,
    backgroundColor: color,
    clear: 'both',
    ...style
  }

  return <div style={styleApplied}>{title}</div>
}

function App() {
  const style = {
    maxWidth: 960,
    margin: '0 auto',
    fontFamily: 'arial, sans-serif',
    fontSize: '24px'
  }

  return (
    <div style={style}>
      <Container color="#888" title="Header" />
      <div>
        <Container
          style={{ float: 'right', width: '70%', clear: 'none' }}
          color={`#aaa`}
          title="Main"
        />
        <Container
          style={{ float: 'left', width: '30%', clear: 'none' }}
          color={'#ccc'}
          title="Sidebar"
        />
      </div>
      <Container color={`#888`} title="Footer" />
    </div>
  )
}

export default App
