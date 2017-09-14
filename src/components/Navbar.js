import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'

class Navbar extends Component {
  render() {
    return (
      <Menu secondary style={styles.navbar}>
        <Container>
          <Menu.Item>
            <h1 style={styles.h1}>{this.props.title}</h1>
          </Menu.Item>
        </Container> 
      </Menu>
    )
  }
}

const styles = {
  navbar: {
    borderRadius: 0,
    backgroundColor: '#0D47A1',
    marginBottom: '5%'
  },
  h1: {
    color: '#FFF',
    fontSize: 23
  }
}

export default Navbar
