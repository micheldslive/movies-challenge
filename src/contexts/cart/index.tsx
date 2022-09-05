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
    case 'increment':
      return { ...state, cart: action.increment }
    case 'decrement':
      return { ...state, cart: action.decrement }
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

  const increment = (id: number) => {
    const { cart } = states
    const index = cart.findIndex((item) => item.id === id)

    if (index !== -1) {
      cart[index].quantity ? (cart[index].quantity += 1) : ''
      dispatch({ type: 'increment', increment: cart })
    }
  }

  const decrement = (id: number) => {
    const { cart } = states
    const index = cart.findIndex((item) => item.id === id)

    if (index !== -1) {
      cart[index].quantity === 1 ? remove(id) : (cart[index].quantity -= 1)
      dispatch({ type: 'decrement', decrement: cart })
    }
  }

  const totalQuantityAndPrice = () => {
    const { cart } = states
    const quantity = cart.reduce(
      (acumulator, actual) => acumulator + actual.quantity,
      0,
    )
    const total = cart.reduce(
      (acumulator, actual) => acumulator + actual.price,
      0,
    )

    return { quantity, total }
  }

  return (
    <CartContext.Provider
      value={{
        ...states,
        add,
        remove,
        increment,
        decrement,
        totalQuantityAndPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, useCart }
