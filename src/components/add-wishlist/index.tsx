import { useWishlist } from '@/contexts'
import { IMovieCart } from '@/core/types'
import cn from 'classnames'
import Favorite from '@mui/icons-material/Favorite'

interface IAddButtonProps {
  item: IMovieCart
}

export const AddFavorite = ({ item }: IAddButtonProps) => {
  const { wishlist, add, remove } = useWishlist()
  const added = wishlist.findIndex(({ id }) => id === item.id)
  const isAdded = added === -1

  const handleClick = () => {
    isAdded ? add(item) : remove(item.id)
  }

  return (
    <div className='card-add-favorite-container'>
      <a
        onClick={() => handleClick()}
        className={cn('card-add-favorite', isAdded && 'favorited')}
      >
        <Favorite fontSize='large' />
      </a>
    </div>
  )
}
