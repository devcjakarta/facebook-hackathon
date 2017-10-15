import React from 'react'
import { Menu, Grid } from 'semantic-ui-react'

import SponsorList from './SponsorList'

const sponsorLists = [{
  text: 'Organized By',
  tabletGrid: 5,
  computerGrid: 2,
  lists: [{
    name: 'Hacktiv8',
    imageSrc: require('../assets/images/logo_hacktiv8.png')
  }]
}, {
  text: 'Gold Sponsor',
  tabletGrid: 5,
  computerGrid: 2,
  lists: [{
    name: 'Facebook',
    imageSrc: require('../assets/images/logo-facebook.png')
  }]
}, {
  text: 'Silver Sponsor',
  tabletGrid: 5,
  computerGrid: 2,
  lists: [{
    name: 'mainAPI',
    imageSrc: require('../assets/images/logo-mainapi.png')
  }]
}, {
  text: 'Supported By',
  tabletGrid: 7,
  computerGrid: 3,
  lists: [{
    name: 'Blibli',
    imageSrc: require('../assets/images/logo-blibli.jpg')
  }, {
    name: 'Bukalapak',
    imageSrc: require('../assets/images/logo-bukalapak.png')
  }, {
    name: 'Kudo',
    imageSrc: require('../assets/images/logo-kudo.png')
  }]
}, {
  text: 'Community Partner',
  className: 'communityLogo',
  tabletGrid: 7,
  computerGrid: 3,
  lists: [{
    name: 'FemaleGeek',
    imageSrc: require('../assets/images/logo-femalegeek.png')
  }, {
    name: 'JakartaJS',
    imageSrc: require('../assets/images/logo-jakartajs.jpeg')
  }, {
    name: 'Pascal Indonesia',
    imageSrc: require('../assets/images/logo-pascalindonesia.jpg')
  }, {
    name: 'PHP Indonesia',
    imageSrc: require('../assets/images/logo-phpindonesia.png')
  }, {
    name: 'Software Architect Indonesia Community',
    imageSrc: require('../assets/images/logo-saic.png')
  }]
}]

function Sponsor () {
  return (
    <Menu style={styles.sponsor}>
      <Grid centered style={{width: '100%'}}>
        {
          sponsorLists.map((sponsorList, i) => <SponsorList key={i} {...sponsorList} />)
        }
      </Grid>
    </Menu>
  )
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
