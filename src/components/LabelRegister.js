import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class LabelRegister extends Component {
  render() {
    return (
      <Grid.Column style={styles.Column}>
        <h1 style={styles.h1}>
          {this.props.title}
        </h1>
        <h2 style={styles.h2}>
          {this.props.subTitle}
        </h2>
      </Grid.Column>
    )
  }
}

const styles = {
  h1: {
    color: '#FFF',
    fontSize: 80
  },
  h2: {
    color: '#EEE',
    fontSize: 30
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default LabelRegister
