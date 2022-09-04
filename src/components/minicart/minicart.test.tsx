import { getRenderer } from '@/core/tests/helpers'
import Minicart from './index'

describe('<Minicart />', () => {
  it('should have a link and svg element on Minicart', () => {
    const { getByLabelText } = getRenderer(<Minicart />)

    const link = getByLabelText('link')
    const svg = getByLabelText('svg')

    expect(link).toBeInTheDocument()
    expect(svg).toBeInTheDocument()
  })
})
