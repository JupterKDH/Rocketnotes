import axios from "axios"

export const api = axios.create({
  baseURL: 'https://rockenotes-api-6i74.onrender.com'
});
