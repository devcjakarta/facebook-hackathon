import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Card, Form, Input, Button } from 'semantic-ui-react'

import '../../styles/register/form-register.css'

import InlineError from '../messages/InlineError'
import ButtonSocial from '../buttons/ButtonSocial'

import {validateRegisterData} from '../../utils/FormValidations'
import {displayMessage} from '../../utils/register/methods'

class FormRegister extends PureComponent {
  initialState = {
    name: '',
    email: '',
    phone: '',
    title: '',
    description: '',
    url: '',
    file: '',
    tech: 'Facebook Stack'
  }
  state = {
    data: {
      ...this.initialState
    },
    useFacebook: false,
    loading: false,
    response: {},
    errors: {}
  }

  handleInputChange = ({target}) => {
    let {name, value} = target
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: value.length === 0
      }
    })
  }

  onSubmit = () => {
    const errors = validateRegisterData(this.state.data)
    this.setState({ errors, response: {} })
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true })
      this.props.submit(this.state.data)
        .then(res => {
          this.setState({
            loading: false,
            data: this.initialState,
            response: res.data,
            useFacebook: false
          })
        })
        .catch(response => {
          this.setState({
            loading: false,
            response
          })
        })
    }
  }

  socialLogin = () => {
    this.setState({
      loading: true
    })
  }

  registerFacebookSuccess = ({_profile}) => {
    let {name, email} = _profile
    this.setState({
      data: {
        ...this.state.data,
        name,
        email
      },
      errors: {
        ...this.state.errors,
        name: '',
        email: ''
      },
      useFacebook: true,
      loading: false
    })
  }

  registerFacebookFailure = response => {
    this.setState({
      loading: false,
      response
    })
  }

  render() {
    const { data, errors, useFacebook, loading, response } = this.state
    return (
      <Grid.Column mobile={16} tablet={16} computer={8} style={styles}>
        <Card fluid>
          <Card.Content>
            <Form loading={loading}>
              {
                displayMessage(response)
              }
              <Form.Field required error={!!errors.name}>
                <label htmlFor="name">Nama Lengkap</label>
                <Input type="text"
                  name="name"
                  onChange={this.handleInputChange}
                  value={data.name}
                  disabled={useFacebook}
                  placeholder="Masukan nama lengkap" />
                { errors.name && <InlineError text={errors.name} />}
              </Form.Field>
              <Form.Field required error={!!errors.email}>
                <label htmlFor="email">E-mail</label>
                <Input type="email"
                  name="email"
                  onChange={this.handleInputChange}
                  value={data.email}
                  disabled={useFacebook}
                  placeholder="Masukan alamat e-mail" />
                { errors.email && <InlineError text={errors.email} />}
              </Form.Field>
              <Form.Field required error={!!errors.phone}>
                <label htmlFor="phone">No. Telepon</label>
                <Input type="text"
                  name="phone"
                  onChange={this.handleInputChange}
                  value={data.phone}
                  placeholder="Masukan nomor telepon" />
                { errors.phone && <InlineError text={errors.phone} />}
              </Form.Field>

              <Form.Field required error={!!errors.title}>
                <label htmlFor="title">Judul Hackathon</label>
                <Input type="text"
                  name="title"
                  onChange={this.handleInputChange}
                  value={data.title}
                  placeholder="Masukan judul hackathon" />
                { errors.title && <InlineError text={errors.title} />}
              </Form.Field>

              <Form.Field required error={!!errors.title}>
                <label htmlFor="description">Deskripsi Singkat</label>
                <textarea
                  name="description"
                  onChange={this.handleInputChange}
                  value={data.description}
                  placeholder="Masukan judul hackathon" />
                { errors.description && <InlineError text={errors.description} />}
              </Form.Field>

              <Form.Field required error={!!errors.url}>
                <label htmlFor="url">URL</label>
                <Input type="text"
                  name="url"
                  onChange={this.handleInputChange}
                  value={data.url}
                  placeholder="Masukan URL" />
                { errors.url && <InlineError text={errors.url} />}
              </Form.Field>

              <Form.Field required error={!!errors.file}>
                <label htmlFor="file">Dokumen <i>(max 10Mb)</i></label>
                <Input type="file"
                  id="file"
                  name="file"
                  onChange={this.handleInputChange}
                  value={data.file}
                  placeholder="Dokumen Anda" />
                { errors.file && <InlineError text={errors.file} />}
              </Form.Field>

              <Form.Group grouped>
                <label htmlFor="tech">Teknologi</label>
                <Form.Radio
                  label='Facebook Stack'
                  name='tech'
                  value='Facebook Stack'
                  control="input"
                  type="radio"
                  checked={data.tech === 'Facebook Stack'}
                  onChange={this.handleInputChange} />
                <Form.Radio
                  label='Umum'
                  name='tech'
                  value='Umum'
                  control="input"
                  type="radio"
                  checked={data.tech === 'Umum'}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Field>
                <Button positive onClick={this.onSubmit}>Register</Button>
                {
                  !this.state.useFacebook && (
                    <ButtonSocial
                      provider="facebook"
                      appId="1436210843160846"
                      onClick={this.socialLogin}
                      onLoginSuccess={this.registerFacebookSuccess}
                      onLoginFailure={this.registerFacebookFailure}>
                        Register with Facebook
                    </ButtonSocial>
                  )
                }
              </Form.Field>
            </Form>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}

FormRegister.propTypes = {
  submit: PropTypes.func.isRequired
}

const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default FormRegister
