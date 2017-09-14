import React, { Component } from 'react'
import { Grid, Card, Form } from 'semantic-ui-react'

class FormRegister extends Component {
  render() {
    return (
      <Grid.Column mobile={16} tablet={16} computer={8} style={styles}>
        <Card fluid>
          <Card.Content>
            <Form>
              {this.props.children}
            </Form>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}

const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default FormRegister
