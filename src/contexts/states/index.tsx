import React, { createContext, useContext, useReducer } from 'react'

import {
  IChildren,
  IStateContext,
  IStateDefaultValues,
  TActionStateContext,
} from '@/core/types'

const initialStates: IStateContext = {
  loading: false,
}

const contextState: IStateDefaultValues = {
  ...initialStates,
  setLoading: () => false,
}

const StateContext = createContext(contextState)

const useStates = () => useContext(StateContext)

export const reducer = (state: IStateContext, action: TActionStateContext) => {
  const actions = {
    loading: { ...state, loading: action.loading },
  }

  return actions[action.type] || state
}

const StateProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(reducer, initialStates)

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'loading', loading })
  }

  return (
    <StateContext.Provider value={{ ...state, setLoading }}>
      {children}
    </StateContext.Provider>
  )
}

export { StateProvider, useStates }
