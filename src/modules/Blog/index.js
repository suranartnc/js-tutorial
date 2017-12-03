import React from 'react'
import { Route, Link } from 'react-router-dom'

import HomePage from '../Blog/pages/HomePage'
import EntryPage from '../Blog/pages/EntryPage'
import AboutPage from '../Blog/pages/AboutPage'

function BlogApp() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/entry" component={EntryPage} />
        <Route exact path="/about" component={AboutPage} />
      </div>
    </div>
  )
}

export default BlogApp
