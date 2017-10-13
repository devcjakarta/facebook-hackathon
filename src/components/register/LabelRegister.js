import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header } from 'semantic-ui-react'

import '../../styles/register/label-register.css'

function LabelRegister ({ title, subTitle, lastSubmission, periode }) {
  return (
    <Grid.Column mobile={16} tablet={16} computer={8}>
      <div className="label-register">
        <Header as="h1">
          {title}
        </Header>
        <Header as="h2">
          {subTitle}
        </Header>
        <div style={{fontSize: 15, color: '#FFFFFF', marginTop: 60}}>
        Last Submission {lastSubmission}
        </div>
      </div>
    </Grid.Column>
  )
}

LabelRegister.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  organizerName: PropTypes.string,
  organizerImg: PropTypes.string,
  sponsorGoldName: PropTypes.string,
  sponsorGoldImg: PropTypes.string,
  sponsorSilverImg: PropTypes.string,
  sponsorSilverName: PropTypes.string,
  supporter1Img: PropTypes.string,
  supporter2Img: PropTypes.string,
  communityPartnerImg1: PropTypes.string,
  communityPartnerImg2: PropTypes.string,
  communityPartnerImg3: PropTypes.string,
  communityPartnerImg4: PropTypes.string,
  communityPartnerImg5: PropTypes.string
}

export default LabelRegister
