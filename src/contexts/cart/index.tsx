import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  IChildren,
  ICartContext,
  ICartDefaultValues,
  TActionCartContext,
  IMovieCart,
} from '@/core/types'
import { LocalStorage } from '@/core/localStorage'

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
    case 'addStorage':
      return { ...state, cart: action.addStorage }
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
  const [states, dispatch] = useReducer(reducer, initialCarts),
    local = new LocalStorage(),
    key = 'cart'

  const add = (add: IMovieCart) => {
    dispatch({ type: 'add', add })
  }

  const remove = (id: number) => {
    const remove = states.cart.filter((item) => item.id !== id)
    dispatch({ type: 'remove', remove })
  }

  const addStorage = (addStorage: IMovieCart[]) => {
    dispatch({ type: 'addStorage', addStorage })
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

  useEffect(() => {
    const getCart = local.get(key)
    getCart && addStorage(getCart)
  }, [])

  useEffect(() => {
    states.cart.length && local.set(key, JSON.stringify(states.cart))
  }, [states])

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
