import { createContext, useContext, useEffect, useState } from 'react'
import {
  IChildren,
  ICheckoutContext,
  ICheckoutDefaultValues,
} from '@/core/types'
import { LocalStorage } from '@/core/localStorage'

const initialStates: ICheckoutContext = {
  name: '',
  cpf: '',
  phone: '',
  email: '',
  cep: '',
  address: '',
  city: '',
  state: '',
}

const contextCheckout = {} as ICheckoutDefaultValues

const CheckoutContext = createContext(contextCheckout)

const useCheckout = () => useContext(CheckoutContext)

const CheckoutProvider = ({ children }: IChildren) => {
  const [state, setState] = useState<ICheckoutContext>(initialStates),
    local = new LocalStorage(),
    key = 'checkout'

  // REGISTER SETTER

  useEffect(() => {
    const getCheckout = local.get(key)
    getCheckout && setState(getCheckout)
  }, [])

  useEffect(() => {
    state && local.set(key, JSON.stringify(state))
  }, [state])

  return (
    <CheckoutContext.Provider value={{ ...state, setState }}>
      {children}
    </CheckoutContext.Provider>
  )
}

export { CheckoutProvider, useCheckout }
