import { createContext, useContext, useEffect, useReducer } from 'react'
import {
  IChildren,
  IWishlistContext,
  IWishlistDefaultValues,
  TActionWishlistContext,
  IMovieCart,
} from '@/core/types'
import { LocalStorage } from '@/core/localStorage'
import { toast } from 'react-toastify'

const initialWishlists: IWishlistContext = {
  wishlist: [],
}

const contextWishlist = {} as IWishlistDefaultValues

const WishlistContext = createContext(contextWishlist)

const useWishlist = () => useContext(WishlistContext)

const reducer = (state: IWishlistContext, action: TActionWishlistContext) => {
  switch (action.type) {
    case 'add':
      return { ...state, wishlist: [...state.wishlist, action.add] }
    case 'addStorage':
      return { ...state, wishlist: action.addStorage }
    case 'remove':
      return { ...state, wishlist: action.remove }
    default:
      return state
  }
}

const WishlistProvider = ({ children }: IChildren) => {
  const [states, dispatch] = useReducer(reducer, initialWishlists),
    local = new LocalStorage(),
    key = 'wishlist'

  const add = (add: IMovieCart) => {
    dispatch({ type: 'add', add })
    toast.success(`Filme ${add.title}, adicionado aos Favoritos.`)
  }

  const addStorage = (addStorage: IMovieCart[]) => {
    dispatch({ type: 'addStorage', addStorage })
  }

  const remove = (id: number) => {
    const remove = states.wishlist.filter((item) => item.id !== id)
    dispatch({ type: 'remove', remove })
  }

  useEffect(() => {
    const getCart = local.get(key)
    getCart && addStorage(getCart)
  }, [])

  useEffect(() => {
    states.wishlist.length && local.set(key, JSON.stringify(states.wishlist))
  }, [states])

  return (
    <WishlistContext.Provider
      value={{
        ...states,
        add,
        remove,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export { WishlistProvider, useWishlist }
