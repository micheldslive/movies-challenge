import axios from 'axios'
import { requestInterceptor } from './interceptors'

const config = {
  baseURL: import.meta.env.VITE_API_BASEURL || '',
}

const api = axios.create(config)

api.interceptors.request.use(requestInterceptor)

export default {
  getAllGenres: (lang: string = 'pt-BR') =>
    api({ method: 'GET', url: `genre/movie/list?language=${lang}` }),

  getTrendings: (page: number = 1) =>
    api({ method: 'GET', url: `/trending/movie/week?page=${page}` }),

  searchByQuery: (page: number = 1, search: string) =>
    api({ method: 'GET', url: `/search/movie?page=${page}&query=${search}` }),
}
