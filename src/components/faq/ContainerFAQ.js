import React from 'react'
import {Container, Header, Card} from 'semantic-ui-react'

import FAQList from './FAQList'

const FAQLists = [{
  question: 'Kapan pendaftaran Jakarta Hack Day dibuka?',
  answer: ' '
}, {
  question: 'Kapan pendaftaran Jakarta Hack Day ditutup?',
  answer: ' '
}, {
  question: 'Ke mana dokumen presentasi dikirim?',
  answer: ' '
}, {
  question: 'Kapan sesi penjurian Jakarta Hack Day dimulai?',
  answer: ' '
}, {
  question: 'Kapan pengumuman kandidat finalis Jakarta Hack Day?',
  answer: ' '
}, {
  question: 'Kapan pengumuman pemenang Jakarta Hack Day?',
  answer: ' '
}]

function ContainerFAQ () {
  return (
    <Container id="faq-container" text>
      <Card fluid raised style={styles.transparentBackground}>
        <Card.Content>
          <Header as="h1">FAQ</Header>
          {
            FAQLists.map((list, i) => <FAQList list={list} key={i} />)
          }
        </Card.Content>
      </Card>
    </Container>
  )
}

const styles = {
  transparentBackground: {
    backgroundColor: 'rgb(13, 71, 161)',
    opacity: .75
  }
}

export default ContainerFAQ
