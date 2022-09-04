import { IChildren } from '@/core/types'
import { MovieProvider } from './movies'
import { StateProvider } from './states'

export const AllContextsProvider = ({ children }: IChildren) => {
  return (
    <MovieProvider>
      <StateProvider>{children}</StateProvider>
    </MovieProvider>
  )
}
