import React from 'react'

import HomePage from '../Blog/pages/HomePage'
import EntryPage from '../Blog/pages/EntryPage'
import AboutPage from '../Blog/pages/AboutPage'

function BlogApp() {
  return (
    <div>
      <div>
        <a href="/">My Blog App</a>
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      <HomePage />
      <EntryPage />
      <AboutPage />
    </div>
  )
}

export default BlogApp
