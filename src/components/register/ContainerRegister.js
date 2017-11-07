import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import LabelRegister from './LabelRegister'
import FormRegister from './FormRegister'

import {submitRegisterData} from '../../utils/register/methods'
import isExceedDeadline from '../../utils/DateValidation'

function ContainerRegister () {
  return (
    <Container>
      <Grid>
        <LabelRegister
          title="Developer Circles Community Challenge"
          subTitle="Jakarta Hack Day"
          subTitleOld="Bring the world, closer together."
          lastSubmission="7 November 2017"
          periode="11 November 2017"
        />
        {
          isExceedDeadline() ?
          <h1 style={{color:'white'}}>Registration has been closed</h1> :
          <FormRegister submit={submitRegisterData} />
        }
      </Grid>
    </Container>
  )
}

export default ContainerRegister
