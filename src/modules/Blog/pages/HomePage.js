import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <p>This is homepage.</p>
      <Link to="/entry/1234/">Entry page</Link>
    </div>
  )
}
