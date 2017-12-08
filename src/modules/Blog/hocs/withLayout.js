import React from 'react'
import Layout from '../components/Layout'

export default function withLayout(WrappedComponent) {
  return class WrappedComponentWithLayout extends React.Component {
    render() {
      return (
        <Layout>
          <WrappedComponent {...this.props} />
        </Layout>
      )
    }
  }
}
