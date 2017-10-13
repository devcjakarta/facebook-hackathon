import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Container, Grid } from 'semantic-ui-react'

function Footer ({ title, subTitle, organizerName, organizerImg, sponsorGoldImg, sponsorSilverImg, supporter1Img, supporter2Img, communityPartnerImg1, communityPartnerImg2, communityPartnerImg3, communityPartnerImg4, communityPartnerImg5 }) {
  return (
    <Menu style={styles.footer}>
      <Container>
        <Grid.Column>
          Powered By <a href="https://www.facebook.com/groups/DevCJakarta/">Facebook Developer Circles Jakarta</a>
        </Grid.Column>
      </Container>
    </Menu>
  )
}


Footer.propTypes = {
  organizerName: PropTypes.string,
  title: PropTypes.string.isRequired
}

const styles = {
  footer: {
    borderRadius: 0,
    backgroundColor: '#0D47A1',
  },
  h1: {
    color: '#FFF',
    fontSize: 23,
    paddingTop: 6
  }
}

export default Footer
