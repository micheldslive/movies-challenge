import { useCart } from '@/contexts'
import { IMovieCart } from '@/core/types'
import { CircularProgress } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useState } from 'react'

interface IAddButtonProps {
  item: IMovieCart
}

export const AddButton = ({ item }: IAddButtonProps) => {
  const { cart, add, increment, decrement } = useCart()
  const [loading, setLoading] = useState<boolean>(false)
  const cartItem = cart.find(({ id }) => id === item.id)

  const handleAddPromise = async (item: IMovieCart) => {
    setLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      add(item)
      setLoading(false)
    })
  }

  return (
    <div className='card-add-button-container'>
      {!cartItem ? (
        <button
          onClick={() => handleAddPromise(item)}
          className='card-add-button'
          disabled={loading}
        >
          {loading && (
            <span>
              <CircularProgress className='progress' size={16} />
            </span>
          )}{' '}
          Adicionar
        </button>
      ) : (
        <div className='card-quantity'>
          <button onClick={() => decrement(item.id)} className='decrement'>
            <RemoveIcon />
          </button>
          <span>{cartItem?.quantity}</span>
          <button onClick={() => increment(item.id)} className='increment'>
            <AddIcon />
          </button>
        </div>
      )}
    </div>
  )
}
