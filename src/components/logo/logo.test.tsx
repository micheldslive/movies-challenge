import { fireEvent, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Logo from './index'

describe('<Logo />', () => {
  it.each(['logo'])('should have a element %p click', () => {
    const { getByText } = getRenderer()
    const history = createMemoryHistory({ initialEntries: ['/'] })

    fireEvent.click(getByText('Logo'))
    expect(history.location.pathname).toBe('/')
  })
})

function getRenderer() {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  return render(
    <Router navigator={history} location={'/'}>
      <Logo />
    </Router>,
  )
}
