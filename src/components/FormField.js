import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'semantic-ui-react'

class FormField extends Component {
  render() {
    let {label, type, name, onChange, value, placeholder, disabled, ...rest} = this.props
    return (
      <Form.Field>
        <label>{label}</label>
        <Input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          {...rest}
         />
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
