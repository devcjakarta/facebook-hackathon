import React from 'react'
import PropTypes from 'prop-types'

function InlineError ({ text }) {
  let style = { color: "#ae5856" }
  return (
    <span style={style}>{text}</span>
  )
}

InlineError.propTypes = {
  text: PropTypes.string.isRequired
}

export default InlineError
