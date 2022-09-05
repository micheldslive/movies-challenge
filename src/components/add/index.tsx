import { useCart } from '@/contexts/cart'
import { IMovieCart } from '@/core/types'
import { useEffect } from 'react'

interface IAddButtonProps {
  item: IMovieCart
}

export const AddButton = ({ item }: IAddButtonProps) => {
  const { add } = useCart()
  return (
    <span>
      <button onClick={() => add(item)}>Adicionar</button>
    </span>
  )
}
