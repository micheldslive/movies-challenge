import { createContext, useContext, useEffect, useReducer, useRef } from 'react'
import {
  IChildren,
  ICartContext,
  ICartDefaultValues,
  TActionCartContext,
  IMovieCart,
} from '@/core/types'
import { LocalStorage } from '@/core/localStorage'
import { toast } from 'react-toastify'
import { removeItem } from '@/core/utils'

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
    case 'removeAll':
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
    initialRender = useRef(true),
    local = new LocalStorage(),
    key = 'cart'

  const add = (add: IMovieCart) => {
    const cartItem = states.cart.find(({ id }) => id === add.id)

    if (cartItem) {
      toast.error(`Filme ${add.title}, já foi adicionado ao carrinho.`)
    } else {
      dispatch({ type: 'add', add })
      toast.success(`Filme ${add.title}, adicionado ao carrinho.`)
    }
  }

  const remove = (id: number) => {
    const remove = removeItem(states.cart, id)
    local.set(key, JSON.stringify(states.cart))
    dispatch({ type: 'remove', remove })
  }

  const removeAll = () => {
    dispatch({ type: 'remove', remove: [] })
    local.remove(key)
  }

  const addStorage = (addStorage: IMovieCart[]) => {
    dispatch({ type: 'addStorage', addStorage })
  }

  const increment = (id: number) => {
    const { cart } = states
    const index = cart.findIndex((item) => item.id === id)

    if (index === -1) return

    cart[index].quantity ? (cart[index].quantity += 1) : ''
    dispatch({ type: 'increment', increment: cart })
  }

  const decrement = (id: number) => {
    const { cart } = states
    const index = cart.findIndex((item) => item.id === id)

    if (index === -1) return

    if (cart[index].quantity === 1) {
      const remove = removeItem(states.cart, id)
      dispatch({ type: 'remove', remove })
    } else {
      cart[index].quantity -= 1
      dispatch({ type: 'decrement', decrement: cart })
    }
  }

  function totalQuantityAndPrice() {
    const quantity = states.cart?.reduce(
      (acumulator, actual) => acumulator + actual.quantity,
      0,
    )
    const total = states.cart?.reduce(
      (acumulator, actual) => acumulator + actual.price * actual.quantity,
      0,
    )

    return { quantity, total }
  }

  useEffect(() => {
    const getCart = local.get(key)
    getCart && addStorage(getCart)
  }, [])

  useEffect(() => {
    initialRender.current
      ? (initialRender.current = false)
      : local.set(key, JSON.stringify(states.cart))
  }, [states])

  return (
    <CartContext.Provider
      value={{
        ...states,
        add,
        remove,
        removeAll,
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
