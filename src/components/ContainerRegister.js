import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

ContainerRegister.propTypes = {
  children: PropTypes.node.isRequired
}

export default ContainerRegister
