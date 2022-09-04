import { fireEvent, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Search from './index'
import { getRenderer } from '@/core/tests/helpers'

describe('<Search />', () => {
  it('should have a input and svg elements', () => {
    const { getByLabelText } = getRenderer(<Search />)

    const input = getByLabelText('input')
    const svg = getByLabelText('svg')

    expect(input).toBeInTheDocument()
    expect(svg).toBeInTheDocument()
  })
})
