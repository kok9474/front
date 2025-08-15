import axios from 'axios';

const api = axios.create({
  baseURL: 'http://http://34.22.78.216:8080/api',
});

export default api;