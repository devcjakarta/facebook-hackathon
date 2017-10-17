import React from 'react'
import { Button } from 'semantic-ui-react'
import SocialLogin from 'react-social-login'

function ButtonSocial ({ children, onClick, triggerLogin, ...props}) {
  let handleLogin = () => {
    onClick()
    triggerLogin()
  }
  return (
    <Button {...props} color="facebook" onClick={handleLogin}>
      {children}
    </Button>
  )
}

export default SocialLogin(ButtonSocial)
