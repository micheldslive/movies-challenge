import { CartItem } from './item'
import { getRenderer } from '@/core/tests/helpers'

describe('<Minicart />', () => {
  const item = {
    id: 1,
    title: 'Test',
    quantity: 1,
    price: 9.99,
    poster_path: 'image',
  }

  it.each(['CartItem'])('should have a element %p', () => {
    const { container, getByText } = getRenderer(<CartItem item={item} />)

    const title = getByText('Test')
    const price = getByText('R$ 9,99')
    const quantity = getByText('1')
    const path = container.getElementsByClassName('cartItem-image')

    expect(title).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(quantity).toBeInTheDocument()
    expect(path.length).toBe(1)
  })
})
