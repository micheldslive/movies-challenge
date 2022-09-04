import { IChildren } from '@/core/types'
import { StateProvider } from './states'

export const AllContextsProvider = ({ children }: IChildren) => {
  return <StateProvider>{children}</StateProvider>
}
