import React from 'react'
import { Button } from 'semantic-ui-react'
import SocialLogin from 'react-social-login'

function ButtonSocial ({ children, triggerLogin, ...props}) {
  return (
    <Button {...props} color="facebook" onClick={triggerLogin}>
      {children}
    </Button>
  )
}

export default SocialLogin(ButtonSocial)
