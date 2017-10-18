import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Container, Header } from 'semantic-ui-react'
import Link from 'react-router-dom/Link'

class Navbar extends Component {
  render() {
    return (
      <Menu secondary style={styles.navbar}>
        <Container>
          <Header as="h1" style={styles.h1}>
            <Container>
              <Header.Content>
                  <Link to="/" style={styles.h1}>{this.props.title}</Link>
              </Header.Content>
              <div className="menu-topright">
                {/* <a href="http://jakarta-challenge.devcid.com/faq">FAQ</a> */}
                <Link to="http://jakarta-hackday.devcid.com/faq">FAQ</Link>
              </div>
              <div className="menu-topright">
                <Link to="http://jakarta-hackday.devcid.com/about">About</Link>
                {/* <a href="http://jakarta-hackday.devcid.com/about">About</a> */}
              </div>
            </Container>
          </Header>
        </Container>
      </Menu>
    )
  }
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
