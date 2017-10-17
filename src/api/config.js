import {create} from 'axios'

const API = create({
  baseURL: 'http://localhost',
  headers: {
  	'content-type': 'multipart/form-data'
  }
})

export default API
