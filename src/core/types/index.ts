export interface IChildren {
  children: React.ReactNode
}

export interface IStateContext {
  loading: boolean
}

export interface IStateDefaultValues extends IStateContext {
  setLoading(loading: boolean): void
}

export type TActionStateContext = { type: 'loading'; loading: boolean }
