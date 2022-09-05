import { memo } from 'react'
import { formatPrice, getPrice } from '@/core/utils/price'

interface IPriceProps {
  rating: number
}

const Price = ({ rating }: IPriceProps) => {
  const price = getPrice(rating)
  const newPrice = formatPrice(price)

  return <span className='card-price'>{newPrice}</span>
}

export default memo(Price)
