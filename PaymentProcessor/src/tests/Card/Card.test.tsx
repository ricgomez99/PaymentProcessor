import Card from '../../components/Card'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect, beforeEach } from 'vitest'

describe('Card', () => {
  afterEach(cleanup)
  beforeEach(() => render(<Card />))

  it('should render the component', () => {
    render(<Card />)
  })

  it('should render the product image', () => {
    screen.getByAltText('product image')
  })

  it('should render the product title', () => {
    screen.getByText('Card Title')
  })

  it('should render the product description', () => {
    screen.getByText('Description')
    screen.getByRole('description')
  })

  it('should render the product price', () => {
    screen.getByRole('price')
  })

  it('should render the "Pay with credit card" button', () => {
    screen.getByText('Pay with credit card')
  })

  it('should increment counter when user clicks on Increment button', () => {
    const initialCounterValue = parseInt(screen.getByRole('counter').innerText)
    const button = screen.getByText('Increment')

    fireEvent.click(button)
    const updateCounterValue = parseInt(screen.getByRole('counter').innerText)

    expect(updateCounterValue).toEqual(initialCounterValue + 1)
  })
})
