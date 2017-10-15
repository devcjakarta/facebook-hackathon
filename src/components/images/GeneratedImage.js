import React from 'react'
import PropTypes from 'prop-types'

function GeneratedImage ({ id, imageSrc, name}) {
  return (
    <img id={id} src={imageSrc} alt={name} />
  )
}

GeneratedImage.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default GeneratedImage
