import { memo } from 'react'
import CartIcon from '@mui/icons-material/ShoppingCart'
import { useStates } from '@/contexts'

const MinicartIcon = () => {
  const { cartOpen, setCartOpen } = useStates()

  return (
    <a
      className='minicart-icon'
      aria-label='link'
      onClick={() => setCartOpen(!cartOpen)}
    >
      <CartIcon aria-label='svg' />
    </a>
  )
}

export default memo(MinicartIcon)
