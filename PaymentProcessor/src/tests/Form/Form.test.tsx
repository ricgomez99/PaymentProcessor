import { describe, it, expect, beforeEach, afterEach, vitest } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import PayForm from '../../components/PayForm'
import { ProductsProvider } from '../../components/ProductsProvider'

const mockUsedNavigate = vitest.fn()
vitest.mock('react-router-dom', () => ({
  useNavigate: () => mockUsedNavigate,
}))

describe('PayForm', () => {
  beforeEach(() =>
    render(
      <ProductsProvider>
        <PayForm />
      </ProductsProvider>
    )
  )
  afterEach(cleanup)

  it('should render component', () => {
    render(
      <ProductsProvider>
        <PayForm />
      </ProductsProvider>
    )
  })

  it('should have inputs for "name", "cardNumber", "expDate", and "securityCode"', () => {
    const nameInput = screen.getByRole('cardName')
    const numberInput = screen.getByRole('cardNumber')
    const dateInput = screen.getByRole('expDate')
    const codeInput = screen.getByRole('securityCode')

    expect(nameInput).toBeDefined()
    expect(numberInput).toBeDefined()
    expect(dateInput).toBeDefined()
    expect(codeInput).toBeDefined()
  })

  it('should have inputs for "address", "country", and "zipCode"', () => {
    const addressInput = screen.getByRole('shippingAddress')
    const countryInput = screen.getByRole('country')
    const codeInput = screen.getByRole('zipCode')

    expect(addressInput).toBeDefined()
    expect(countryInput).toBeDefined()
    expect(codeInput).toBeDefined()
  })
})
