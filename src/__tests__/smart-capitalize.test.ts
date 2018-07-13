import { capitalize } from '../smart-capitalize'

describe('smart-capitalize', () => {
  describe('capitalize', () => {
    test('It capitalizes a word with lowercase letters', () => {
      expect(capitalize('hello')).toBe('Hello')
    })

    test('It does nothing to empty strings', () => {
      expect(capitalize('')).toBe('')
    })

    test('It skips whitespace at the beginning of the string', () => {
      expect(capitalize('  hello')).toBe('  Hello')
    })

    test('It does not capitalize a word that already has an uppercase letter in it', () => {
      expect(capitalize('hEllo')).toBe('hEllo')
    })
  })
})
