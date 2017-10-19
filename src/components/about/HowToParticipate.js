import React from 'react'
import {Header, List} from 'semantic-ui-react'
import Link from 'react-router-dom/Link'

function HowToParticipate () {
  return (
    <div className="about-list">
      <Header as="h3">
        How to Participate
      </Header>
      <div className="about-list-contents">
        <List as="ul" className="about-list-item">
          <List.Item as="li" className="add-space">
            Join <a href="https://www.facebook.com/groups/DevCJakarta/" target="_blank" rel="noreferrer noopener">Facebook Group of DevC Jakarta</a>
            <br />
            Must be member of Facebook Developer Circles Jakarta
          </List.Item>
          <List.Item as="li" className="add-space">
            Create Product and Demo Video
            <br />
            Create minimum prototype of your product and make a video about it. Then submit the link to us.
          </List.Item>
          <List.Item as="li" className="add-space">
            Register by online
            <br />
            Open <Link to="/">jakarta-hackday.devcid.com</Link> then click "Register"
            <br />
            Submission can be:
            <List.List as="ol" type="1" className="about-list-item">
              <List.Item as="li">Demo video, maximum 3 minutes, or</List.Item>
              <List.Item as="li">Screenshoot, or</List.Item>
              <List.Item as="li">How to access your application (url/link, build apk, etc)</List.Item>
            </List.List>
          </List.Item>
        </List>
      </div>
    </div>
  )
}

export default HowToParticipate
