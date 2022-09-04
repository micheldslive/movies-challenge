import { memo } from 'react'
import CartIcon from '@mui/icons-material/ShoppingCart'

const Minicart = () => {
  return (
    <a className='minicart' aria-label='link'>
      <CartIcon aria-label='svg' />
    </a>
  )
}

export default memo(Minicart)
