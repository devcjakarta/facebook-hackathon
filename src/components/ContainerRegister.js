import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

class ContainerRegister extends Component {
  render() {
    return (
      <Container>
        <Grid>
          {this.props.children}
        </Grid>
      </Container>
    )
  }
}

export default ContainerRegister
