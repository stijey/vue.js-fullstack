import axios from 'axios'

export default () => {
  return axios.create({
    // backend URL
    baseURL: `http://localhost:8081/`
  })
}
