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
               <input onChange={(e) => {this.setState({firstName: e.target.value})}} value={this.state.firstName} placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input onChange={(e) => {this.setState({lastName: e.target.value})}} value={this.state.lastName} placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                <Button positive fluid onClick={() => alert(`Name : ${this.state.firstName} ${this.state.lastName}`)}>Register</Button>
              </Form.Field>
            </FormRegister>
          </ContainerRegister> 
        </div>
      </div>
    )
  }
}

export default App
