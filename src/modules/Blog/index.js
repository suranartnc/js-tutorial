import React from 'react'

import { Link, Route } from 'react-router-dom'

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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Route exact path="/" component={HomePage} />
      <Route path="/entry/:id" component={EntryPage} />
      <Route path="/about" component={AboutPage} />
    </div>
  )
}

export default BlogApp
