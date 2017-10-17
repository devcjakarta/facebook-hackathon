import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'

import Image from './images/GeneratedImage'

function generateImageID (text, lists, index) {
  return `img${text.includes('ed By') ? text.replace('ed By', 'er') : text.split(' ').join('')}${lists.length > 1 ? (index + 1) : ''}`
}

function SponsorList ({ text, computerGrid, tabletGrid, lists, className }) {
  return (
    <Grid.Column mobile={16} tablet={tabletGrid} computer={computerGrid} textAlign="center" className={className}>
      <div style={{fontSize: 12}}>{text}</div>
      {
        lists.map((list, i) => <Image key={i} {...list} id={generateImageID(text, lists, i)} />)
      }
    </Grid.Column>
  )
}

SponsorList.propTypes = {
  className: PropTypes.string,
  tabletGrid: PropTypes.number.isRequired,
  computerGrid: PropTypes.number.isRequired,
  lists: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired

}

SponsorList.defaultProps = {
  className: ''
}

export default SponsorList
