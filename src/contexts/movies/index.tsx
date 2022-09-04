import { createContext, useContext, useReducer } from 'react'
import {
  IChildren,
  IMoviesContext,
  IMoviesDefaultValues,
  TMoviesActionContext,
} from '@/core/types'
import api from '@/core/api'

const initialMovies: IMoviesContext = {
  loading: false,
}

const contextdefaulMovie = {} as IMoviesDefaultValues

const MovieContext = createContext(contextdefaulMovie)

const useMovies = () => useContext(MovieContext)

const reducer = (state: IMoviesContext, action: TMoviesActionContext) => {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: action.loading }
    default:
      return state
  }
}

const MovieProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(reducer, initialMovies)

  // SET LOADING
  const setLoading = (loading: boolean) => {
    dispatch({ type: 'loading', loading })
  }

  // API GETTERS
  const getMovies = async (page: number) => {
    const { data } = await api.getTrendings(page)
    setLoading(false)

    return data
  }

  const searchByQuery = async (page: number, search: string) => {
    const { data } = await api.searchByQuery(page, search)

    return data
  }

  return (
    <MovieContext.Provider
      value={{ ...state, setLoading, getMovies, searchByQuery }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export { MovieProvider, useMovies }
