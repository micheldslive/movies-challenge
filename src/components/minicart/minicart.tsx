import { useCart, useStates } from '@/contexts'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'
import { MinicartFooter } from './footer'
import CartItem from './item'

const MinicartContent = () => {
  const { setCartOpen } = useStates()
  const { cart } = useCart()

  return (
    <div className='cart-container'>
      <div className='cart-title'>
        <a aria-label='link' onClick={() => setCartOpen(false)}>
          <CloseIcon />
        </a>
        <h3>Meu Carrinho</h3>
      </div>
      <div className='cart-content'>
        <div className='cartItems-container'>
          {cart.length ? (
            cart.map((item) => (
              <React.Fragment key={item.id.toString()}>
                <CartItem item={item} />
              </React.Fragment>
            ))
          ) : (
            <span className='empty-content'>Carrinho vazio</span>
          )}
        </div>
        <MinicartFooter />
      </div>
    </div>
  )
}

export default MinicartContent
