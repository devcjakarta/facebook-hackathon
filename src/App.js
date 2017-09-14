import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import ContainerRegister from './components/ContainerRegister'
import LabelRegister from './components/LabelRegister'
import FormRegister from './components/FormRegister'

class App extends Component {
  constructor() {
    super()

    this.state = {
      firstName: '',
      lastName: ''
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
              <Form.Field>
               <label>First Name</label>
               <input type="text" name="firstName" onChange={this.handleInputChange} value={this.state.firstName} placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={this.handleInputChange} value={this.state.lastName} placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                <Button positive onClick={() => alert(`Name : ${this.state.firstName} ${this.state.lastName}`)}>Register</Button>
                <Button color='facebook' onClick={() => alert(`Name : ${this.state.firstName} ${this.state.lastName}`)}>Register with Facebook</Button>
              </Form.Field>
            </FormRegister>
          </ContainerRegister>
        </div>
      </div>
    )
  }
}

export default App
