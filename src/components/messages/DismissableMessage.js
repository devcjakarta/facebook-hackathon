import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class DismissableMessage extends Component {
  state = {
    visible: true
  }

  handleDismiss = () => {
    this.setState({
      visible: false
    })
  }

  render () {
    if (this.state.visible) return (
      <Message onDismiss={this.handleDismiss} {...this.props} />
    )
    return false
  }
}

export default DismissableMessage
