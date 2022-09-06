import { useCart, useStates } from '@/contexts'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '@/core/utils'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'

export const MinicartFooter = () => {
  const { totalQuantityAndPrice } = useCart()
  const [loading, setLoading] = useState<boolean>(false)
  const { setCartOpen } = useStates()
  const { total } = totalQuantityAndPrice()

  const navigate = useNavigate()

  const handleCheckout = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      setLoading(false)
      navigate('/checkout')
      setCartOpen(false)
    })
  }

  return (
    <div className='minicart-footer'>
      <div className='minicart-footer-content'>
        <span className='minicart-footer--title'>Total:</span>
        <span className='minicart-footer--total'>{formatPrice(total)}</span>
      </div>
      <button
        onClick={() => handleCheckout()}
        className='minicart-footer-button'
        disabled={!total}
      >
        {loading && (
          <span>
            <CircularProgress className='progress' size={16} />
          </span>
        )}{' '}
        Finalizar compra
      </button>
    </div>
  )
}
