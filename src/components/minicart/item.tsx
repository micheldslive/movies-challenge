import { IMovieCart } from '@/core/types'
import { useCart } from '@/contexts'
import DeleteIcon from '@mui/icons-material/Delete'

type CartItemProps = {
  item: IMovieCart
}

export const CartItem = ({ item }: CartItemProps) => {
  const { remove } = useCart()

  return (
    <div className='cartItem-container'>
      <div className='cartItem-content'>
        <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} />
        <span>{item.title}</span>
      </div>
      <div>{item.quantity}</div>
      <a onClick={() => remove(item.id)} className='cartItem-remove'>
        <DeleteIcon />
      </a>
    </div>
  )
}

export default CartItem
