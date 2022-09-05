import { memo } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'

const WishlistIcon = () => {
  return (
    <a className='wishlist' aria-label='link'>
      <FavoriteIcon aria-label='svg' />
    </a>
  )
}

export default memo(WishlistIcon)
