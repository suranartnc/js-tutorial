import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from '../Blog/pages/HomePage'
import EntryPage from '../Blog/pages/EntryPage'
import AboutPage from '../Blog/pages/AboutPage'

function BlogApp() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/entry" component={EntryPage} />
      <Route exact path="/about" component={AboutPage} />
    </div>
  )
}

export default BlogApp
