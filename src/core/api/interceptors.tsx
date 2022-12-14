import { AxiosRequestConfig } from 'axios'

const API_KEY = process.env.VITE_API_KEY || ''

export const requestInterceptor = (config: AxiosRequestConfig) => {
  config.url += `&api_key=${API_KEY}`
  return config
}
