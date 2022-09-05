import { IChildren } from '@/core/types'
import { CartProvider } from './cart'
import { MovieProvider } from './movies'
import { StateProvider } from './states'

export const AllContextsProvider = ({ children }: IChildren) => {
  return (
    <MovieProvider>
      <StateProvider>
        <CartProvider>{children}</CartProvider>
      </StateProvider>
    </MovieProvider>
  )
}
