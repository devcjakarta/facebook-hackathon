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
          supporter1Img="http://jakarta-challenge.devcid.com/static/media/logo-bukalapak.png"
          supporter2Img="http://jakarta-challenge.devcid.com/static/media/logo-kudo.png"
          communityPartnerImg1="http://jakarta-challenge.devcid.com/static/media/logo-femalegeek.png"
          communityPartnerImg2="http://jakarta-challenge.devcid.com/static/media/logo-jakartajs.jpeg"
          communityPartnerImg3="http://jakarta-challenge.devcid.com/static/media/logo-pascalindonesia.jpg"
          communityPartnerImg4="http://jakarta-challenge.devcid.com/static/media/logo-phpindonesia.png"
          communityPartnerImg5="http://jakarta-challenge.devcid.com/static/media/logo-saic.png"
        />
        <FormRegister submit={submitRegisterData} />
      </Grid>
    </Container>
  )
}

export default ContainerRegister
