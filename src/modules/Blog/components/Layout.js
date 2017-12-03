import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  wrapper: {
    maxWidth: '1024px',
    margin: '0 auto'
  },
  logo: {
    padding: '20px 15px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  logoLink: {
    color: '#666',
    textDecoration: 'none'
  },
  nav: {
    display: 'flex',
    borderTop: '1px solid #eee'
  },
  navLink: {
    padding: '10px 15px',
    color: '#666',
    textDecoration: 'none'
  },
  main: {
    marginTop: '50px'
  }
}

function Layout({ children }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          My Blog App
        </Link>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>
          Home
        </Link>
        <Link to="/about" style={styles.navLink}>
          About
        </Link>
      </nav>
      <main style={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
