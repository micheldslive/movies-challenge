import { IMovieCart } from '@/core/types'
import { useWishlist } from '@/contexts'
import DeleteIcon from '@mui/icons-material/Delete'

type WishlistItemItemProps = {
  item: IMovieCart
}

export const WishlistItem = ({ item }: WishlistItemItemProps) => {
  const { remove } = useWishlist()

  return (
    <div className='wishlistItem-container'>
      <div className='wishlistItem-content'>
        <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} />
        <span>{item.title}</span>
      </div>
      <div>{item.quantity}</div>
      <a onClick={() => remove(item.id)} className='wishlistItem-remove'>
        <DeleteIcon />
      </a>
    </div>
  )
}

export default WishlistItem
