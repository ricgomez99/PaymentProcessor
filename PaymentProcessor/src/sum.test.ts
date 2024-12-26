import { it, describe, expect, expectTypeOf } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('should be a function', () => {
    expectTypeOf(sum).toBeFunction()
  })

  it('3 + 4 should return 7', () => {
    const result = sum(3, 4)
    expect(result).toEqual(7)
  })

  it('2 + 2 should return 4', () => {
    const result = sum(2, 2)
    expect(result).toEqual(4)
  })
})
