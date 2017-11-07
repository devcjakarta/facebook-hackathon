import React, { PureComponent } from 'react'
import { Button } from 'semantic-ui-react'
import SocialLogin from 'react-social-login'

class ButtonSocial extends PureComponent {
  handleLogin = () => {
    let { onClick, triggerLogin } = this.props
    onClick()
    triggerLogin()
  }

  render () {
    let {children, triggerLogin, triggerLogout, ...rest } = this.props
    return (
      <Button {...rest} color="facebook" onClick={this.handleLogin}>
        {children}
      </Button>
    )
  }
}

export default SocialLogin(ButtonSocial)
