import { useStates, useWishlist } from '@/contexts'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'
import WishlistItem from './item'

const WishlistContent = () => {
  const { setWishlistOpen } = useStates()
  const { wishlist } = useWishlist()

  return (
    <div className='wishlist-container'>
      <div className='wishlist-title'>
        <a aria-label='link' onClick={() => setWishlistOpen(false)}>
          <CloseIcon />
        </a>
        <h3>Meus Favoritos</h3>
      </div>
      <div className='wishlistItems-container'>
        {wishlist.length ? (
          wishlist.map((item) => (
            <React.Fragment key={item.id.toString()}>
              <WishlistItem item={item} />
            </React.Fragment>
          ))
        ) : (
          <span className='empty-content'>Favoritos vazio</span>
        )}
      </div>
    </div>
  )
}

export default WishlistContent
