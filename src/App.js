import React, { Component } from 'react'
import { Form, Button, Radio } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import ContainerRegister from './components/ContainerRegister'
import LabelRegister from './components/LabelRegister'
import FormRegister from './components/FormRegister'
import FormField from './components/FormField'

class App extends Component {
  constructor() {
    super()

    this.state = {
      fullName: '',
      email: '',
      phone: '',
      hackTitle: '',
      tech: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange ({target}) {
    let {name, value} = target
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  render() {
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
                value={this.state.fullName}
                placeholder="Masukan nama lengkap" />
              
              <FormField
                label="E-mail"
                type="email"
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
                placeholder="Masukan alamat e-mail" />

              <FormField
                label="No. Telepon"
                type="number"
                name="phone"
                onChange={this.handleInputChange}
                value={this.state.phone}
                placeholder="Masukan nomor telepon" />

              <FormField
                label="Judul Hackathon"
                type="text"
                name="hackTitle"
                onChange={this.handleInputChange}
                value={this.state.hackTitle}
                placeholder="Masukan judul hackathon" />

              <Form.Field>
                <label>Teknologi</label>
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Facebook Stack'
                  name='tech'
                  value='Facebook Stack'
                  checked={this.state.tech === 'Facebook Stack'}
                  onChange={this.handleInputChange} />
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Umum'
                  name='tech'
                  value='Umum'
                  checked={this.state.tech === 'Umum'}
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <Button positive onClick={() => alert(`
                  Name : ${this.state.fullName}\n
                  E-mail: ${this.state.email}\n
                  No. Telp: ${this.state.phone}\n
                  Title: ${this.state.hackTitle}\n
                  Tech: ${this.state.tech}`)}>Register</Button>
                <Button color="facebook" onClick={() => alert(`
                  Name : ${this.state.fullName}\n
                  E-mail: ${this.state.email}\n
                  No. Telp: ${this.state.phone}\n
                  Title: ${this.state.hackTitle}\n
                  Tech: ${this.state.tech}`)}>Register with Facebook</Button>
              </Form.Field>
            </FormRegister>
          </ContainerRegister>
        </div>
      </div>
    )
  }
}

export default App
