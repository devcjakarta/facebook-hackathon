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
        name: '',
        email: '',
        phone: '',
        title: '',
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
    const { name, email, phone, title, value } = this.state.formData

    if(validator.isEmpty(name)) {
      alert("Name is empty")
    } else if(validator.isEmpty(email)) {
      alert("Email is empty")
    } else if(!validator.isEmail(email)) {
      alert("Error email")
    } else if(validator.isEmpty(phone)) {
      alert("Phone is empty")
    } else if(!validator.isMobilePhone(phone, 'id-ID')) {
      alert("Error mobile phone")
    } else if(validator.isEmpty(title)) {
      alert("Title is empty")
    } else if(value === "") {
      alert("Tech is empty")
    } else {
      this.submitToService(this.state.formData)
    }
  }

  submitToService(data) {
    console.log(data)
    let body = new FormData()
    body.append('json', JSON.stringify(data))
    fetch('http://localhost:5000/api/v1/user', {
      method: 'POST',
      body: body
    }).then((res) => {
      res.json()
    }).then((data) => {
      alert(JSON.stringify(data))
    })
  }

  registerFacebookSuccess ({_profile}) {
    let {name, email} = _profile
    this.setState({
      formData: {
        ...this.state.formData,
        name: name,
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
    let {email, name, title, phone, tech} = formData
    const image = 'http://freevectorlogo.net/wp-content/uploads/2013/11/facebook-flat-vector-logo-400x400.png'
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
              organizeName="Facebook"
              organizeImg={image}
              sponsorImg1={image}
              sponsorImg2={image}
              sponsorImg3={image}
              mediaPartnerImg1={image}
              mediaPartnerImg2={image}
              mediaPartnerImg3={image}
              mediaPartnerImg4={image} />
            <FormRegister>
              <FormField
                label="Nama lengkap"
                type="text"
                name="name"
                onChange={this.handleInputChange}
                value={name}
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
                name="title"
                onChange={this.handleInputChange}
                value={title}
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
