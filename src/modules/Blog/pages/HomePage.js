import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <p>This is home page.</p>
      <Link to="/entry">Entry page</Link>
    </div>
  )
}

export default HomePage
