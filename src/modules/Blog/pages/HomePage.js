import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const api = 'http://localhost:3000/posts'

  return (
    <div>
      <p>
        Fetch data from&nbsp;
        <a href={api} target="_blank">
          {api}
        </a>
      </p>
      <p>&nbsp;</p>
      <Link to="/entry/1/">Link to Entry #1</Link>
    </div>
  )
}
