import { memo } from 'react'
import CartIcon from '@mui/icons-material/ShoppingCart'
import { useCart, useStates } from '@/contexts'
import { Badge } from '@mui/material'

const MinicartIcon = () => {
  const { cartOpen, setCartOpen } = useStates()
  const { totalQuantityAndPrice } = useCart()
  const { quantity } = totalQuantityAndPrice()

  return (
    <a
      className='minicart-icon'
      aria-label='link'
      onClick={() => setCartOpen(!cartOpen)}
    >
      <Badge className='minicart-badge' badgeContent={quantity}>
        <CartIcon aria-label='svg' />
      </Badge>
    </a>
  )
}

export default memo(MinicartIcon)
