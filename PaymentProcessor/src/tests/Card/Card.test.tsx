import Card from '../../components/Card'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'

describe('Card', () => {
  afterEach(cleanup)

  it('should render the component', () => {
    render(<Card />)
  })

  it('should render the title', () => {
    render(<Card />)
    screen.getByText('Card Title')
  })

  it('should increment counter when user clicks on Increment button', () => {
    render(<Card />)
    const initialCounterValue = parseInt(screen.getByRole('counter').innerText)
    const button = screen.getByText('Increment')

    fireEvent.click(button)
    const updateCounterValue = parseInt(screen.getByRole('counter').innerText)

    expect(updateCounterValue).toEqual(initialCounterValue + 1)
  })
})
