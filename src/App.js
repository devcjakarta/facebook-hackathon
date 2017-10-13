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
        <Sponsor 
          organizerName="Hacktiv8"
          organizerImg="http://jakarta-challenge.devcid.com/static/media/logo_hacktiv8.png"
          sponsorGoldName="Facebook"
          sponsorGoldImg="http://jakarta-challenge.devcid.com/static/media/logo-facebook.png"          
          sponsorSilverImg="http://jakarta-challenge.devcid.com/static/media/logo-mainapi.png"
          sponsorSilverName="MainAPI"
          supporter1Img="http://jakarta-challenge.devcid.com/static/media/logo-bukalapak.png"
          supporter2Img="http://jakarta-challenge.devcid.com/static/media/logo-kudo.png"
          communityPartnerImg1="http://jakarta-challenge.devcid.com/static/media/logo-femalegeek.png"
          communityPartnerImg2="http://jakarta-challenge.devcid.com/static/media/logo-jakartajs.jpeg"
          communityPartnerImg3="http://jakarta-challenge.devcid.com/static/media/logo-pascalindonesia.jpg"
          communityPartnerImg4="http://jakarta-challenge.devcid.com/static/media/logo-phpindonesia.png"
          communityPartnerImg5="http://jakarta-challenge.devcid.com/static/media/logo-saic.png"
        />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
