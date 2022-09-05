import { getRenderer } from '@/core/tests/helpers'
import WishlistIcon from './index'

describe('<WishlistIcon />', () => {
  it('should have a link and svg element on WishlistIcon', () => {
    const { getByLabelText } = getRenderer(<WishlistIcon />)

    const link = getByLabelText('link')
    const svg = getByLabelText('svg')

    expect(link).toBeInTheDocument()
    expect(svg).toBeInTheDocument()
  })
})
