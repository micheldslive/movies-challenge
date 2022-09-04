import { getRenderer } from '@/core/tests/helpers'
import Wishlist from './index'

describe('<Wishlist />', () => {
  it('should have a link and svg element on Wishlist', () => {
    const { getByLabelText } = getRenderer(<Wishlist />)

    const link = getByLabelText('link')
    const svg = getByLabelText('svg')

    expect(link).toBeInTheDocument()
    expect(svg).toBeInTheDocument()
  })
})
