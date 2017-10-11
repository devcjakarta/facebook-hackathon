import {create} from 'axios'

const API = create({
  baseURL: 'http://localhost:5000/api/v1'
})

export default API
