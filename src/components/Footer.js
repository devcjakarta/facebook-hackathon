import React from 'react'
import { Menu, Container, Grid } from 'semantic-ui-react'

function Footer () {
  return (
    <Menu style={styles.footer}>
      <Container>
        <Grid.Column>
          Powered By <a href="https://www.facebook.com/groups/DevCJakarta/">Facebook Developer Circles Jakarta</a>
        </Grid.Column>
      </Container>
    </Menu>
  )
}


const styles = {
  footer: {
    borderRadius: 0,
    backgroundColor: '#0D47A1',
  },
  h1: {
    color: '#FFF',
    fontSize: 23,
    paddingTop: 6
  }
}

export default Footer
