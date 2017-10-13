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
          organizerName="Hacktiv8"
          organizerImg="http://jakarta-challenge.devcid.com/static/media/logo_hacktiv8.png"
          sponsorGoldName="Facebook"
          sponsorGoldImg="http://jakarta-challenge.devcid.com/static/media/logo-facebook.png"          
          sponsorSilverImg="http://jakarta-challenge.devcid.com/static/media/logo-mainapi.png"
          sponsorSilverName="MainAPI"
          supportedBy1Name="BukaLapak"
          supportedBy2Name="Kudo"
          communityPartnerImg1="{image}"
          communityPartnerImg2="{image}"
          communityPartnerImg3="{image}"
          communityPartnerImg4="{image}"
          communityPartnerImg5="{image}"
        />
        <FormRegister submit={submitRegisterData} />
      </Grid>
    </Container>
  )
}

export default ContainerRegister
