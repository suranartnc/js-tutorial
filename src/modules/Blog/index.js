import React from 'react'
import { Route } from 'react-router-dom'

import Layout from './components/Layout'

import HomePage from '../Blog/pages/HomePage'
import EntryPage from '../Blog/pages/EntryPage'
import AboutPage from '../Blog/pages/AboutPage'

function BlogApp() {
  return (
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/entry" component={EntryPage} />
      <Route exact path="/about" component={AboutPage} />
    </Layout>
  )
}

export default BlogApp
