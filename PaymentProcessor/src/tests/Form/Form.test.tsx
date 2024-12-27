import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import PayForm from '../../components/PayForm'

describe('PayForm', () => {
  beforeEach(() => render(<PayForm />))
  afterEach(cleanup)

  it('should render component', () => {
    render(<PayForm />)
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
})
