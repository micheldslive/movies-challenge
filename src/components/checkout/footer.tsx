import { useCart, useStates } from '@/contexts'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '@/core/utils'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'

interface ICheckoutFooter {
  loading: boolean
}

export const CheckoutFooter = ({ loading }: ICheckoutFooter) => {
  const { totalQuantityAndPrice } = useCart()
  const { total } = totalQuantityAndPrice()

  return (
    <div className='minicart-footer'>
      <div className='minicart-footer-content'>
        <span className='minicart-footer--title'>Total:</span>
        <span className='minicart-footer--total'>{formatPrice(total)}</span>
      </div>
      <button
        type='submit'
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
