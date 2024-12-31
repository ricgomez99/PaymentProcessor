import Card from '../../components/Card'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect, beforeEach } from 'vitest'

const cardMock = {
  title: 'Card',
  description: 'a new card',
  price: 25,
  imageUrl: '',
  stock: 2,
}

describe('Card', () => {
  afterEach(cleanup)
  beforeEach(() =>
    render(
      <Card
        title={cardMock.title}
        description={cardMock.description}
        price={cardMock.price}
        imageUrl={cardMock.imageUrl}
        stock={cardMock.stock}
      />
    )
  )

  it('should render the component', () => {
    render(
      <Card
        title={cardMock.title}
        description={cardMock.description}
        price={cardMock.price}
        imageUrl={cardMock.imageUrl}
        stock={cardMock.stock}
      />
    )
  })

  it('should render the product image', () => {
    screen.getByAltText('product image')
  })

  it('should render the product title', () => {
    screen.getByRole('cardTitle')
  })

  it('should render the product description', () => {
    screen.getByText('Description')
    screen.getByRole('description')
  })

  it('should render the product price', () => {
    screen.getByRole('price')
  })

  it('should render the product stock', () => {
    screen.getByRole('stock')
  })

  it('should render the "Pay with credit card" button', () => {
    screen.getByText('Pay with credit card')
  })

  it('should open a modal when user clicks on the button', () => {
    const button = screen.getByText('Pay with credit card')
    fireEvent.click(button)
    const modal = screen.getByRole('dialog')

    expect(modal).toBeDefined()
  })
})
