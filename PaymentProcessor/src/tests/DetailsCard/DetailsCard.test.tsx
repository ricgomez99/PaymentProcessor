import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import DetailsCard from '../../components/DetailsCard'
import { ProductsProvider } from '../../components/ProductsProvider'

describe('DetailsCard', () => {
  beforeEach(() => {
    render(
      <ProductsProvider>
        <DetailsCard />
      </ProductsProvider>
    )
  })

  afterEach(cleanup)

  it('should render the component', () => {
    render(
      <ProductsProvider>
        <DetailsCard />
      </ProductsProvider>
    )
  })

  it('shoudl render the product details (title, image, price, stock, description)', () => {
    screen.getByRole('title')
    screen.getByRole('image')
    screen.getByRole('price')
    screen.getByRole('stock')
    screen.getByRole('description')
  })

  it('should render payment details (sh.address, sh.fee, delivery.fee, totalPrice)', () => {
    screen.getByRole('shippingAddress')
    screen.getByRole('shippingFee')
    screen.getByRole('deliveryFee')
    screen.getByRole('totalPrice')
  })

  it('should render a button "complete payment"', () => {
    const payButton = screen.getByRole('payButton')
    expect(payButton).toBeDefined()
  })
})
