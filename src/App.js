import React from 'react'

import Navbar from './components/Navbar'
import ContainerRegister from './components/register/ContainerRegister'

function App () {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar title="Facebook Developer Circles Jakarta" />
      </div>
      <div className="App-content">
        <ContainerRegister />
      </div>
    </div>
  )
}

export default App
