import { useWishlist } from '@/contexts'
import { IMovieCart } from '@/core/types'
import Favorite from '@mui/icons-material/Favorite'

interface IAddButtonProps {
  item: IMovieCart
}

export const AddFavorite = ({ item }: IAddButtonProps) => {
  const { wishlist, add, remove } = useWishlist()

  const handleClick = () => {
    const added = wishlist.findIndex(({ id }) => id === item.id)

    added === -1 ? add(item) : remove(item.id)
  }

  return (
    <div className='card-add-favorite-container'>
      <a onClick={() => handleClick()} className='card-add-favorite'>
        <Favorite />
      </a>
    </div>
  )
}
