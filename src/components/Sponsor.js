import React from 'react'
import { Menu, Grid } from 'semantic-ui-react'

import SponsorList from './SponsorList'

const sponsorLists = [{
  text: 'Organized By',
  tabletGrid: 4,
  computerGrid: 2,
  lists: [{
    name: 'DevC Jakarta',
    imageSrc: require('../assets/images/logo-devcjkt.png')
  },{
    name: 'Hacktiv8',
    imageSrc: require('../assets/images/logo-hacktiv8-transparent.png')
  }]
}, {
  text: 'Media Partner',
  tabletGrid: 3,
  computerGrid: 2,
  lists: [{
    name: 'Code Politan',
    imageSrc: require('../assets/images/logo-codepolitan.png')
  }]
}, {
  text: 'Gold Sponsor',
  tabletGrid: 3,
  computerGrid: 2,
  lists: [{
    name: 'mainAPI',
    imageSrc: require('../assets/images/logo-mainapi.png')
  }]
}, {
  text: 'Silver Sponsor',
  tabletGrid: 3,
  computerGrid: 2,
  lists: [{
    name: 'Awan Io',
    imageSrc: require('../assets/images/logo-awanio.png')
  }]
}, {
  text: 'Supported By',
  tabletGrid: 7,
  computerGrid: 4,
  lists: [{
    name: 'Blibli',
    imageSrc: require('../assets/images/logo-blibli.png')
  }, {
    name: 'Bukalapak',
    imageSrc: require('../assets/images/logo-bukalapak.png')
  }, {
    name: 'Kejora',
    imageSrc: require('../assets/images/logo-kejora.png')
  }, {
    name: 'Kudo',
    imageSrc: require('../assets/images/logo-kudo.png')
  }, {
    name: 'Tokopedia',
    imageSrc: require('../assets/images/logo-tokopedia.png')
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
