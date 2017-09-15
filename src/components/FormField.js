import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

class FormField extends Component {
  render() {
    return (
      <Form.Field>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
          placeholder={this.props.placeholder} />
      </Form.Field>
    )
  }
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

export default FormField
