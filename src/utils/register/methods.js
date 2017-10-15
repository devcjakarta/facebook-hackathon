import React from 'react'
//import {stringify} from 'qs'

import DismissableMessage from '../../components/messages/DismissableMessage'

import API from '../../api/config'

export function displayMessage (response) {
   if (response.status && (response.status === 'OK')) return (
    <DismissableMessage success={response.status === 'OK'} header="Registration Success" content="Your data has been submitted" />
  )
  if (response.message && (response.message.includes('Authentication failed'))) return (
    <DismissableMessage error={response.message.includes('Authentication failed')} header='Registration Failed' content="Failed to register with facebook" />
  )
  if (response.message && (response.message.includes('Network Error'))) return (
    <DismissableMessage error={response.message.includes('Network Error')} header='Registration Failed' content="Failed to submit your data, please try again" />
  )
}

export function submitRegisterData (data) {
  const formData = new FormData();
  var inputFile = document.getElementById('file').files[0]
  formData.append('name', data['name']);
  formData.append('phone', data['phone']);
  formData.append('email', data['email']);
  formData.append('title', data['title']);
  formData.append('tech', data['tech']);
  formData.append('url', data['url']);
  formData.append('file', inputFile)
  return new Promise((resolve, reject) => {
    API.post('/submission', (formData))
    .then(res => resolve(res))
    .catch(err => reject(err))
  })
}
