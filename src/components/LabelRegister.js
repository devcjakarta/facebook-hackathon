import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Header } from 'semantic-ui-react'

import '../styles/register/label-register.css'

class LabelRegister extends Component {
  render() {
    let { title, subTitle } = this.props
    return (
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <div className="label-register">
          <Header as="h1">
            {title}
          </Header>
          <Header as="h2">
            {subTitle}
          </Header>
        </div>
      </Grid.Column>
    )
  }
}

LabelRegister.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default LabelRegister
