import React from 'react'

import { Route } from 'react-router-dom'

import HomePage from '../Blog/pages/HomePage'
import EntryPageContainer from '../Blog/pages/EntryPageContainer'
import AboutPage from '../Blog/pages/AboutPage'

function BlogApp() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/entry/:id" component={EntryPageContainer} />
      <Route exact path="/about" component={AboutPage} />
    </div>
  )
}

export default BlogApp
