import React from 'react'

import Navbar from './components/Navbar'
import ContainerRegister from './components/register/ContainerRegister'
import Sponsor from './components/Sponsor'
import Footer from './components/Footer'

function App () {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar title="Facebook Developer Circles Jakarta" />
      </div>
      <div className="App-content">
        <ContainerRegister />
      </div>
      <div className="App-sponsor">
        <Sponsor />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
