import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import LabelRegister from './LabelRegister'
import FormRegister from './FormRegister'

import {submitRegisterData} from '../../utils/register/methods'

function ContainerRegister () {
  return (
    <Container>
      <Grid>
        <LabelRegister
          title="Jakarta Challenge 2017"
          subTitle="Bring the world, closer together."
        />
        <FormRegister submit={submitRegisterData} />
      </Grid>
    </Container>
  )
}

export default ContainerRegister
