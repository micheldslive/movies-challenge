import { createContext, useContext, useEffect, useReducer } from 'react'
import {
  IChildren,
  IStateContext,
  IStateDefaultValues,
  TActionStateContext,
} from '@/core/types'
import api from '@/core/api'

const initialStates: IStateContext = {
  search: '',
  genres: [],
}

const contextState = {} as IStateDefaultValues

const StateContext = createContext(contextState)

const useStates = () => useContext(StateContext)

const reducer = (state: IStateContext, action: TActionStateContext) => {
  switch (action.type) {
    case 'search':
      return { ...state, search: action.search }
    case 'genres':
      return { ...state, genres: action.genres }
    default:
      return state
  }
}

const StateProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(reducer, initialStates)

  const setSearch = (search: string) => {
    dispatch({ type: 'search', search })
  }

  // API GETTERS
  const getGenres = async () => {
    const { data } = await api.getAllGenres()

    dispatch({ type: 'genres', genres: data.genres })
  }

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <StateContext.Provider value={{ ...state, setSearch }}>
      {children}
    </StateContext.Provider>
  )
}

export { StateProvider, useStates }
