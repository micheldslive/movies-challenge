import { useCart } from '@/contexts'
import { IMovieCart } from '@/core/types'

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
