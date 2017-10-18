import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'

import Navbar from './components/Navbar'
import Sponsor from './components/Sponsor'
import Footer from './components/Footer'

import ContainerRegister from './components/register/ContainerRegister'
//import ContainerAbout from './components/about/ContainerAbout'
//import ContainerFAQ from './components/faq/ContainerFAQ'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <Navbar title="Facebook Developer Circles Jakarta" />
        </div>
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={ContainerRegister} />
{/*
            <Route exact path="/about" component={ContainerAbout} />
            <Route exact path="/faq" component={ContainerFAQ} />
*/}
          </Switch>
        </div>
        <div className="App-sponsor">
          <Sponsor />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
