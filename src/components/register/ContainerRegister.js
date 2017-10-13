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
          lastSubmission="28 Oktober 2017"
          periode="11 November 2017"
        />
        <FormRegister submit={submitRegisterData} />
      </Grid>
    </Container>
  )
}

export default ContainerRegister
