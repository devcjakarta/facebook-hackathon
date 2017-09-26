import React, { Component } from 'react'
import { Form, Button, Radio } from 'semantic-ui-react'
import validator from 'validator'
import Navbar from './components/Navbar'
import ContainerRegister from './components/ContainerRegister'
import LabelRegister from './components/LabelRegister'
import FormRegister from './components/FormRegister'
import FormField from './components/FormField'
import ButtonSocial from './components/buttons/ButtonSocial'

class App extends Component {
  constructor() {
    super()

    this.state = {
      formData: {
        fullName: '',
        email: '',
        phone: '',
        hackTitle: '',
        tech: 'Facebook Stack'
      },
      useFacebook: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
    this.registerFacebookSuccess = this.registerFacebookSuccess.bind(this)
    this.registerFacebookFailure = this.registerFacebookFailure.bind(this)
  }

  handleInputChange({target}) {
    let {name, value} = target
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  handleRadioChange = (_, {name, value}) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  handleValidation() {
    const { fullName, email, phone, hackTitle, value } = this.state.formData

    if(validator.isEmpty(fullName)) {
      alert("Name is empty")
    } else if(validator.isEmpty(email)) {
      alert("Email is empty")
    } else if(!validator.isEmail(email)) {
      alert("Error email")
    } else if(validator.isEmpty(phone)) {
      alert("Phone is empty")
    } else if(!validator.isMobilePhone(phone, 'id-ID')) {
      alert("Error mobile phone")
    } else if(validator.isEmpty(hackTitle)) {
      alert("Title is empty")
    } else if(value === "") {
      alert("Tech is empty")
    }
  }

  registerFacebookSuccess ({_profile}) {
    let {name, email} = _profile
    this.setState({
      formData: {
        ...this.state.formData,
        fullName: name,
        email
      },
      useFacebook: true
    })
  }

  registerFacebookFailure (error) {
    console.log(error)
  }

  render() {
    let {formData, useFacebook} = this.state
    let {email, fullName, hackTitle, phone, tech} = formData
    return (
      <div className="App">
        <div className="App-header">
          <Navbar title="Facebook Developer Circles Jakarta" />
        </div>
        <div className="App-content">
          <ContainerRegister>
            <LabelRegister
              title="Facebook Hackathon"
              subTitle="Bring the world, closer together."
            />
            <FormRegister>
              <FormField
                label="Nama lengkap"
                type="text"
                name="fullName"
                onChange={this.handleInputChange}
                value={fullName}
                disabled={useFacebook}
                placeholder="Masukan nama lengkap" />

              <FormField
                label="E-mail"
                type="email"
                name="email"
                onChange={this.handleInputChange}
                value={email}
                disabled={useFacebook}
                placeholder="Masukan alamat e-mail" />

              <FormField
                label="No. Telepon"
                type="number"
                name="phone"
                onChange={this.handleInputChange}
                value={phone}
                placeholder="Masukan nomor telepon" />

              <FormField
                label="Judul Hackathon"
                type="text"
                name="hackTitle"
                onChange={this.handleInputChange}
                value={hackTitle}
                placeholder="Masukan judul hackathon" />

              <Form.Field>
                <label>Teknologi</label>
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Facebook Stack'
                  name='tech'
                  value='Facebook Stack'
                  checked={tech === 'Facebook Stack'}
                  onChange={this.handleRadioChange} />
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Umum'
                  name='tech'
                  value='Umum'
                  checked={tech === 'Umum'}
                  onChange={this.handleRadioChange}
                />
              </Form.Field>
              <Form.Field>
                <Button positive onClick={this.handleValidation}>Register</Button>
                {
                  !this.state.useFacebook && (
                    <ButtonSocial
                      provider="facebook"
                      appId="787169631462897"
                      onLoginSuccess={this.registerFacebookSuccess}
                      onLoginFailure={this.registerFacebookFailure}>
                        Register with Facebook
                    </ButtonSocial>
                  )
                }
              </Form.Field>
            </FormRegister>
          </ContainerRegister>
        </div>
      </div>
    )
  }
}

export default App
