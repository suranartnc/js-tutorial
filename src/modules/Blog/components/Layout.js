import React from 'react'
import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div>{children}</div>
    </div>
  )
}

export default Layout
