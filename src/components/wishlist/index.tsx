import { useStates } from '@/contexts'
import { Drawer } from '@mui/material'
import WishlistContent from './wishlist'

export const Wishlist = () => {
  const { setWishlistOpen, wishlistOpen } = useStates()

  return (
    <Drawer
      anchor='right'
      open={wishlistOpen}
      onClose={() => setWishlistOpen(false)}
    >
      <WishlistContent />
    </Drawer>
  )
}
