import { createContext, useContext, useReducer } from 'react'
import {
  IChildren,
  ICartContext,
  ICartDefaultValues,
  TActionCartContext,
  IMovieCart,
} from '@/core/types'

const initialCarts: ICartContext = {
  cart: [],
}

const contextCart = {} as ICartDefaultValues

const CartContext = createContext(contextCart)

const useCart = () => useContext(CartContext)

const reducer = (state: ICartContext, action: TActionCartContext) => {
  switch (action.type) {
    case 'add':
      return { ...state, cart: [...state.cart, action.add] }
    case 'remove':
      return { ...state, cart: action.remove }
    default:
      return state
  }
}

const CartProvider = ({ children }: IChildren) => {
  const [states, dispatch] = useReducer(reducer, initialCarts)

  const add = (add: IMovieCart) => {
    dispatch({ type: 'add', add })
  }

  const remove = (id: number) => {
    const remove = states.cart.filter((item) => item.id !== id)
    dispatch({ type: 'remove', remove })
  }

  return (
    <CartContext.Provider value={{ ...states, add, remove }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, useCart }
