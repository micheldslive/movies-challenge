import { createContext, useContext, useReducer } from 'react'

import {
  IChildren,
  IStateContext,
  IStateDefaultValues,
  TActionStateContext,
} from '@/core/types'

const initialStates: IStateContext = {
  search: '',
}

const contextState: IStateDefaultValues = {
  ...initialStates,
  setSearch: () => '',
}

const StateContext = createContext(contextState)

const useStates = () => useContext(StateContext)

export const reducer = (state: IStateContext, action: TActionStateContext) => {
  switch (action.type) {
    case 'search':
      return { ...state, search: action.search }
    default:
      return state
  }
}

const StateProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(reducer, initialStates)

  const setSearch = (search: string) => {
    dispatch({ type: 'search', search })
  }

  return (
    <StateContext.Provider value={{ ...state, setSearch }}>
      {children}
    </StateContext.Provider>
  )
}

export { StateProvider, useStates }
