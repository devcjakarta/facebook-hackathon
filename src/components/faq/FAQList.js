import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const style = {
  textWhite: {
    color: '#ffffff'
  },
  withPadding: {
    paddingBottom: 16
  }
}

function FAQList ({ list }) {
  let {question, answer} = list
  return (
    <div>
      <Header as="h3">{question}</Header>
      <span style={style.withPadding}>{answer}</span>
    </div>
  )
}

FAQList.propTypes = {
  list: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string
  }).isRequired
}

export default FAQList
