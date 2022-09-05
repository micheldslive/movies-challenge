import { getRenderer } from '@/core/tests/helpers'
import MinicartIcon from './index'

describe('<MinicartIcon />', () => {
  it('should have a link and svg element on MinicartIcon', () => {
    const { getByLabelText } = getRenderer(<MinicartIcon />)

    const link = getByLabelText('link')
    const svg = getByLabelText('svg')

    expect(link).toBeInTheDocument()
    expect(svg).toBeInTheDocument()
  })
})
