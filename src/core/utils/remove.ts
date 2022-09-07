import { IMovieCart } from '../types'

export const removeItem = (cart: IMovieCart[], id: number) => {
  const remove = cart.filter((item) => item.id !== id)
  return remove
}
