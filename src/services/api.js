import axios from 'axios';
import { bitlyKey } from '../../config.json'

export default axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    'Authorization': `Bearer ${bitlyKey}`,
    'Content-Type': 'application/json'
  }
})
