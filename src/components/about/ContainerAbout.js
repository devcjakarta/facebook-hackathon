import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import AboutList from './AboutList'

const aboutLists = [{
  title: 'Facebook Developer Circles Jakarta',
  contents: [{
    subtitle: 'Driven by Local Communities',
    description: `Developer Circles is a community-driven program that's free to join and open to any developer. Each Developer Circle is led by members of the local community who act as leads for the circle, organizing events offline and managing a local online Facebook community. Developer Circles are forums to share knowledge, collaborate, build new ideas, and learn about the latest technologies from Facebook and other industry leaders.`
  }, {
    subtitle: 'Supported by Facebook',
    description: `Developer events, conferences, and hackathons take place everywhere. But we often hear that it’s hard to maintain the momentum, collaboration and knowledge-sharing in between events. With Developer Circles, in addition to hosting meetups and hackathons, each local circle will have a dedicated Facebook Group.`
  }]
}, {
  title: 'What is Developer Circles Community Challenge - Jakarta Hack Day?',
  contents: [
    'Awareness for Global Online Competition of Facebook',
    'Offline round in Jakarta',
    'Mentor from Facebook Engineer and Local Superstar Engineers'
  ]
}, {
  title: 'Rules',
  contents: [
    'Participant from individual, or individual team, who are members of DevC Jakarta',
    'Participants could be from organization / company / start up with a maximum number of employees 50 people',
    'Product as the entries for this hackathon could use Facebook tools. Must not be products that are already in commercial release',
    'There is no registration fee',
    'The team consists of a maximum of 5 people',
    'Minimum submission: prototoype / mockup'
  ]
}, {
  title: 'Facebook Tools',
  contents: [
    ['Facebook Platform', 'Login and Account Kit, Facebook Analytics, dan Messenger Platform.' ],
    ['Facebook Open Source Tools', 'React, React Native, React VR, Caffe2, Fresco, Litho, YogaKit, GraphQL, Relay']
  ]
}, {
  title: 'Judging Criteria',
  contents: [
    ['Quality of idea', 'Creativity and originality of the product idea submitted.' ],
    ['Implementation of Idea', 'How well the implementation of product from the submitted idea.'],
    ['Value', 'How big is the impact of the products submitted.']
  ]
}]

function ContainerAbout () {
  return (
    <Container fluid style={style.container}>
      <Container text>
        <Header as="h1">
          Developer Circles Community Challenge - Jakarta Hack Day
        </Header>
        {
          aboutLists.map((list, i) => <AboutList key={i} list={list} />)
        }
      </Container>
    </Container>
  )
}

const style = {
  container: {
    backgroundColor: '#1565c0',
    marginTop: '-2%',
    marginBottom: -20
  },
  textWhite: {
    color: 'white'
  },
  pl20: {
    paddingLeft: 20
  }
}

export default ContainerAbout
