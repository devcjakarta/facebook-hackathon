import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Header } from 'semantic-ui-react'

import '../styles/register/label-register.css'

class LabelRegister extends Component {
  render() {
    let { title, subTitle, organizeName, organizeImg, sponsorImg1, sponsorImg2, sponsorImg3, mediaPartnerImg1, mediaPartnerImg2, mediaPartnerImg3, mediaPartnerImg4 } = this.props
    return (
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <div className="label-register">
          <Header as="h1">
            {title}
          </Header>
          <Header as="h2">
            {subTitle}
          </Header>
          <div style={{fontSize: 15, color: '#FFFFFF', marginTop: 60}}>Organize By: {organizeName}</div>
          <img src={organizeImg} width='80' alt='organizeImg' /> 
          <div style={{fontSize: 15, color: '#FFFFFF', marginTop: 10}}>Sponsored By</div>
          <img src={sponsorImg1} width='80' alt='sponsorImg1' /> 
          <img src={sponsorImg2} width='80' alt='sponsorImg2' /> 
          <img src={sponsorImg3} width='80' alt='sponsorImg3' /> 
          <div style={{fontSize: 15, color: '#FFFFFF', marginTop: 10}}>Media Partner</div>
          <img src={mediaPartnerImg1} width='80' alt='mediaPartnerImg1' /> 
          <img src={mediaPartnerImg2} width='80' alt='mediaPartnerImg2' /> 
          <img src={mediaPartnerImg3} width='80' alt='mediaPartnerImg3' /> 
          <img src={mediaPartnerImg4} width='80' alt='mediaPartnerImg4' /> 
        </div>
      </Grid.Column>
    )
  }
}

LabelRegister.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  organizeName: PropTypes.string,
  organizeImg: PropTypes.string,
  sponsorImg1: PropTypes.string,
  sponsorImg2: PropTypes.string,
  sponsorImg3: PropTypes.string,
  mediaPartnerImg1: PropTypes.string,
  mediaPartnerImg2: PropTypes.string,
  mediaPartnerImg3: PropTypes.string,
  mediaPartnerImg4: PropTypes.string
}

export default LabelRegister
