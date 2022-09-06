import { IMovieCart } from '@/core/types'
import { useCart } from '@/contexts'
import DeleteIcon from '@mui/icons-material/Delete'
import { formatPrice, ImagePath } from '@/core/utils'

type CartItemProps = {
  item: IMovieCart
}

export const CartItem = ({ item }: CartItemProps) => {
  const { remove } = useCart()

  return (
    <div className='cartItem-container'>
      <div className='cartItem-content'>
        <img className='cartItem-image' src={ImagePath(item.poster_path)} />
        <span>{item.title}</span>
      </div>
      <div>{item.quantity}</div>
      <div>{formatPrice(item.price)}</div>
      <a onClick={() => remove(item.id)} className='cartItem-remove'>
        <DeleteIcon />
      </a>
    </div>
  )
}

export default CartItem
