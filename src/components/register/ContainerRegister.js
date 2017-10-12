import React, { PureComponent } from 'react'
import { Container, Grid } from 'semantic-ui-react'

import LabelRegister from './LabelRegister'
import FormRegister from './FormRegister'

import {submitRegisterData} from '../../utils/register/methods'

class ContainerRegister extends PureComponent {
  submit = (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      API.post('/user', data)
      .then(res => resolve(res))
      .catch(err => {
        console.log(JSON.stringify(err, null, 2))
        reject(err)
      })
    })
  }
  render() {
    return (
      <Container>
        <Grid>
          <LabelRegister
            title="Facebook Hackathon"
            subTitle="Bring the world, closer together."
          />
          <FormRegister submit={this.submit} />
        </Grid>
      </Container>
    )
  }
}

export default ContainerRegister
