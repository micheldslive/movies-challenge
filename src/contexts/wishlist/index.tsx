import { createContext, useContext, useReducer } from 'react'
import {
  IChildren,
  IWishlistContext,
  IWishlistDefaultValues,
  TActionWishlistContext,
  IMovieCart,
} from '@/core/types'

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
    case 'remove':
      return { ...state, wishlist: action.remove }
    default:
      return state
  }
}

const WishlistProvider = ({ children }: IChildren) => {
  const [states, dispatch] = useReducer(reducer, initialWishlists)

  const add = (add: IMovieCart) => {
    dispatch({ type: 'add', add })
  }

  const remove = (id: number) => {
    const remove = states.wishlist.filter((item) => item.id !== id)
    dispatch({ type: 'remove', remove })
  }

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
