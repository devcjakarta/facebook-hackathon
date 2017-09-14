import React, { Component } from 'react'
import { Menu, Container, Header } from 'semantic-ui-react'

class Navbar extends Component {
  render() {
    return (
      <Menu secondary style={styles.navbar}>
        <Container>
          <Header as="h1" style={styles.h1}>
            <Container>
              <Header.Content>
                  {this.props.title}
              </Header.Content>
            </Container>
          </Header>
        </Container>
      </Menu>
    )
  }
}

const styles = {
  navbar: {
    borderRadius: 0,
    backgroundColor: '#0D47A1',
    margin: '0 0 5%'
  },
  h1: {
    color: '#FFF',
    fontSize: 23,
    paddingTop: 6
  }
}

export default Navbar
