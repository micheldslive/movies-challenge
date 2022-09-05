import { IMovieCart } from '@/core/types'
import { useCart } from '@/contexts'

type Props = {
  item: IMovieCart
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const { cart, remove } = useCart()

  return (
    <div className='cartItem-container'>
      <div className='cartItem-content'>
        <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} />
        <span>{item.title}</span>
      </div>
      <div>{item.qtd}</div>
      <a onClick={() => remove(item.id)}>X</a>
    </div>
  )
}

export default CartItem
