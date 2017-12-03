import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

function HomePage() {
  return (
    <Layout>
      <p>This is home page.</p>
      <Link to="/entry">Entry page</Link>
    </Layout>
  )
}

export default HomePage
