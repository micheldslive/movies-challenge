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
  wishlistOpen: false,
  cartOpen: false,
  genres: [],
}

const contextState = {} as IStateDefaultValues

const StateContext = createContext(contextState)

const useStates = () => useContext(StateContext)

const reducer = (state: IStateContext, action: TActionStateContext) => {
  switch (action.type) {
    case 'search':
      return { ...state, search: action.search }
    case 'wishlistOpen':
      return { ...state, wishlistOpen: action.wishlistOpen }
    case 'cartOpen':
      return { ...state, cartOpen: action.cartOpen }
    case 'genres':
      return { ...state, genres: action.genres }
    default:
      return state
  }
}

const StateProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(reducer, initialStates)

  // STATES SETTERS
  const setSearch = (search: string) => {
    dispatch({ type: 'search', search })
  }
  const setWishlistOpen = (wishlistOpen: boolean) => {
    dispatch({ type: 'wishlistOpen', wishlistOpen })
  }
  const setCartOpen = (cartOpen: boolean) => {
    dispatch({ type: 'cartOpen', cartOpen })
  }

  // API GETTER
  const getGenres = async () => {
    const { data } = await api.getAllGenres()

    dispatch({ type: 'genres', genres: data.genres })
  }

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <StateContext.Provider
      value={{ ...state, setSearch, setWishlistOpen, setCartOpen }}
    >
      {children}
    </StateContext.Provider>
  )
}

export { StateProvider, useStates }
