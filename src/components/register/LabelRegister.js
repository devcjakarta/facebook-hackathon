import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header } from 'semantic-ui-react'

import '../../styles/register/label-register.css'

function LabelRegister ({ title, subTitle, organizerName, organizerImg, sponsorGoldImg, sponsorSilverImg, supporter1Img, supporter2Img, communityPartnerImg1, communityPartnerImg2, communityPartnerImg3, communityPartnerImg4, communityPartnerImg5 }) {
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
        <div>
          <div style={{float: 'left'}}>
            <img id="imgSupporter1" src={supporter1Img} alt='Buka Lapak' />
          </div>
          <div style={{float: 'left'}}>
            <img id="imgSupporter1" src={supporter2Img} alt='Kudo' /> 
          </div>
        </div>
        <div style={{fontSize: 15, clear: 'both', paddingTop: 10}}>Community Partner</div>
        <div>
          <div style={{float: 'left'}}><img id="imgCommunityPartner1" src={communityPartnerImg1} alt='' /></div>
          <div style={{float: 'left'}}><img id="imgCommunityPartner2" src={communityPartnerImg2} alt='' /></div>
          <div style={{float: 'left'}}><img id="imgCommunityPartner3" src={communityPartnerImg3} alt='' /></div>
          <div style={{float: 'left'}}><img id="imgCommunityPartner4" src={communityPartnerImg4} alt='' /></div>
          <div style={{float: 'left'}}><img id="imgCommunityPartner5" src={communityPartnerImg5} alt='' /></div>
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
