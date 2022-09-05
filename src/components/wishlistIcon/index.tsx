import { memo } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useStates } from '@/contexts'

const WishlistIcon = () => {
  const { wishlistOpen, setWishlistOpen } = useStates()

  return (
    <a
      className='wishlist-icon'
      aria-label='link'
      onClick={() => setWishlistOpen(!wishlistOpen)}
    >
      <FavoriteIcon aria-label='svg' />
    </a>
  )
}

export default memo(WishlistIcon)
