import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Container, Header } from 'semantic-ui-react'
import Link from 'react-router-dom/Link'

function Navbar ({ title }) {
  return (
    <Menu secondary style={styles.navbar}>
      <Container>
        <Header as="h1" style={styles.h1}>
          <Container>
            <Header.Content>
              <Link to="/" style={styles.h1}>{title}</Link>
            </Header.Content>
            <div className="menu-topright">
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="menu-topright">
              <Link to="/about">About</Link>
            </div>
          </Container>
        </Header>
      </Container>
    </Menu>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

const styles = {
  navbar: {
    borderRadius: 0,
    backgroundColor: '#0D47A1',
    margin: '0 0 2%'
  },
  h1: {
    color: '#FFF',
    fontSize: 23,
    paddingTop: 6
  }
}

export default Navbar
