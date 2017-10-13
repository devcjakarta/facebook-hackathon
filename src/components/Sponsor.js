import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Container, Grid } from 'semantic-ui-react'

function Sponsor ({ title, subTitle, organizerName, organizerImg, sponsorGoldImg, sponsorSilverImg, supporter1Img, supporter2Img, communityPartnerImg1, communityPartnerImg2, communityPartnerImg3, communityPartnerImg4, communityPartnerImg5 }) {
  return (
    <Menu style={styles.sponsor}>
      <Container>
        <Grid.Column>
          <div style={{fontSize: 12}}>Organized By</div>
          <img id="imgOrganizer" src={organizerImg} alt='{organizerName}' />
        </Grid.Column>
        <Grid.Column>
          <div style={{fontSize: 12}}>Gold Sponsor</div>
          <img id="imgGoldSponsor" src={sponsorGoldImg} alt='Gold Sponsor' /> 
        </Grid.Column>
        <Grid.Column>
          <div style={{fontSize: 12}}>Silver Sponsor</div>
          <img id="imgGoldSponsor" src={sponsorSilverImg} alt='Silver Sponsor' /> 
        </Grid.Column>
        <Grid.Column>
          <div style={{fontSize: 12}}>Supported By</div>
          <img id="imgSupporter1" src={supporter1Img} alt='Buka Lapak' />
          <img id="imgSupporter2" src={supporter2Img} alt='Kudo' /> 
        </Grid.Column>
        <Grid.Column className="communityLogo">
          <div style={{fontSize: 12}}>Community Partner</div>
          <div style={{float: 'left'}}><img id="imgCommunityPartner1" src={communityPartnerImg1} alt='' /></div>
          <div style={{float: 'left'}}><img id="imgCommunityPartner2" src={communityPartnerImg2} alt='' /></div>
          <div style={{float: 'left'}}><img id="imgCommunityPartner3" src={communityPartnerImg3} alt='' /></div>
          <div style={{float: 'left'}}><img id="imgCommunityPartner4" src={communityPartnerImg4} alt='' /></div>
          <div style={{float: 'left'}}><img id="imgCommunityPartner5" src={communityPartnerImg5} alt='' /></div>
        </Grid.Column>
        <Grid.Column className="MenuBottom">
          <div style={{fontSize: 12}}>
            <a href="http://jakarta-challenge.devcid.com/about">About Us</a>
            <a href="http://jakarta-challenge.devcid.com/faq">FAQ</a>
          </div>
        </Grid.Column>
      </Container>
    </Menu>
  )
}


Sponsor.propTypes = {
  organizerName: PropTypes.string,
  title: PropTypes.string.isRequired
}

const styles = {
  sponsor: {
    borderRadius: 0,
    backgroundColor: '#FFFFFF'
  },
  h1: {
    color: '#FFF',
    fontSize: 23,
    paddingTop: 6
  }
}

export default Sponsor
