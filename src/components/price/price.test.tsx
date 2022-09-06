import Price from './index'
import { getRenderer } from '@/core/tests/helpers'

describe('<Price />', () => {
  it.each(['Price'])('should have a element %p', () => {
    const { getByText } = getRenderer(<Price rating={0} />)

    const price = getByText('R$ 9,99')

    expect(price).toBeInTheDocument()
  })
})
