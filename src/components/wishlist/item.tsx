import { IMovieCart } from '@/core/types'
import { useCart, useWishlist } from '@/contexts'
import DeleteIcon from '@mui/icons-material/Delete'
import { ImagePath } from '@/core/utils'
import { formatPrice } from '@/core/utils'
import CartIcon from '@mui/icons-material/ShoppingCart'

type WishlistItemItemProps = {
  item: IMovieCart
}

export const WishlistItem = ({ item }: WishlistItemItemProps) => {
  const { remove } = useWishlist()
  const { add } = useCart()

  return (
    <div className='wishlistItem-container'>
      <div className='wishlistItem-content'>
        <img src={ImagePath(item.poster_path)} />
        <span>{item.title}</span>
      </div>
      <div>{formatPrice(item.price)}</div>
      <div>
        <a onClick={() => add(item)} className='wishlistItem-add-cart'>
          <CartIcon />
        </a>
      </div>
      <a onClick={() => remove(item.id)} className='wishlistItem-remove'>
        <DeleteIcon />
      </a>
    </div>
  )
}

export default WishlistItem
