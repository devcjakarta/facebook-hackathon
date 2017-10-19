import React from 'react'
import { Header, List } from 'semantic-ui-react'

import '../../styles/about/about-list.css'

function generateListContents (contents) {
  switch (typeof contents[0][0]) {
    case 'string':
      return (
        <List as="ul" className="about-list-item">
          {
            (contents[0][0].length === 1) ?
              contents.map((content, i) => <List.Item key={i} as="li">{content}</List.Item>) :
              contents.map(([content0, content1], i) => <List.Item key={i} as="li" className="add-space">{content0}<br />{content1}</List.Item>)
          }
        </List>
      )
    default:
      return contents.map((content, i) => ([
        <Header as="h4" key={`h${i}`}>{content.subtitle}</Header>,
        <span key={`span${i}`}>{content.description}</span>
      ])
    )
  }
}

function AboutList ({list}) {
  let {title, contents} = list
  return (
    <div className="about-list">
      <Header as="h3">
        {title}
      </Header>
      <div className="about-list-contents">
        {
          generateListContents(contents)
        }
      </div>
    </div>
  )
}

export default AboutList
