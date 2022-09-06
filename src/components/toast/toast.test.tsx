import Toast from './index'
import { getRenderer } from '@/core/tests/helpers'

describe('<Toast />', () => {
  it.each(['Toast'])('should have a element %p', () => {
    const { container } = getRenderer(<Toast />)

    const toast = container.getElementsByClassName('Toastify')

    expect(toast.length).toBe(1)
  })
})
