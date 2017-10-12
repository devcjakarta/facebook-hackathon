import React from 'react'
import {stringify} from 'qs'

import DismissableMessage from '../../components/messages/DismissableMessage'

import API from '../../api/config'

export function displayMessage (response) {
   if (response.status && (response.status === 200)) return (
    <DismissableMessage success={response.status === 200} header={response.message} content="Your data has been submitted" />
  )
  if (response.message && (response.message.includes('Authentication failed'))) return (
    <DismissableMessage error={response.message.includes('Authentication failed')} header='Registration Failed' content="Failed to register with facebook" />
  )
  if (response.message && (response.message.includes('Network Error'))) return (
    <DismissableMessage error={response.message.includes('Network Error')} header='Registration Failed' content="Failed to submit your data, please try again" />
  )
}

export function submitRegisterData (data) {
  return new Promise((resolve, reject) => {
    API.post('/user', stringify(data))
    .then(res => resolve(res))
    .catch(err => {
      console.log(JSON.stringify(err, null, 2))
      reject(err)
    })
  })
}
