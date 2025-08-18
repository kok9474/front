import axios from 'axios'

const api = axios.create({
  //TODO: 개발용 서버 변경
  baseURL: 'http://34.22.78.216/api',
  //baseURL: '/api',
  withCredentials: true,
})

export default api
