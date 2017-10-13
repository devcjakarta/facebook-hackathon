import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header } from 'semantic-ui-react'

import '../../styles/register/label-register.css'

function LabelRegister ({ title, subTitle, organizerName, organizerImg, sponsorGoldImg, sponsorSilverImg }) {
  return (
    <Grid.Column mobile={16} tablet={16} computer={8}>
      <div className="label-register">
        <Header as="h1">
          {title}
        </Header>
        <Header as="h2">
          {subTitle}
        </Header>
        <div style={{fontSize: 15, color: '#FFFFFF', marginTop: 60}}></div>
        <div>
          <div style={{float: 'left'}}>
            <div style={{fontSize: 15}}>Organize By</div>
            <img id="imgOrganizer" src={organizerImg} alt='{organizerName}' />
          </div>
          <div style={{float: 'left'}}>
            <div style={{fontSize: 15}}>Gold Sponsor</div>
            <img id="imgGoldSponsor" src={sponsorGoldImg} alt='Gold Sponsor' /> 
          </div>
          <div style={{float: 'left'}}>
            <div style={{fontSize: 15}}>Silver Sponsor</div>
            <img id="imgGoldSponsor" src={sponsorSilverImg} alt='Silver Sponsor' /> 
          </div>
        </div>
        <div style={{fontSize: 15, clear: 'both', paddingTop: 10}}>Supported By</div>
        <div style={{fontSize: 15, clear: 'both', paddingTop: 10}}>Community Partner</div>
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
  supportedBy1Name: PropTypes.string,
  supportedBy2Name: PropTypes.string,
  communityPartnerImg1: PropTypes.string,
  communityPartnerImg2: PropTypes.string,
  communityPartnerImg3: PropTypes.string,
  communityPartnerImg4: PropTypes.string,
  communityPartnerImg5: PropTypes.string
}

export default LabelRegister
