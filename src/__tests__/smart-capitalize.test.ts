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
      expect(capitalize("O'Neill")).toBe("O'Neill")
      expect(capitalize('Hyphenated-Name')).toBe('Hyphenated-Name')
    })

    test('It works with non-English alphabets', () => {
      expect(capitalize('это')).toBe('Это')
      expect(capitalize('ñice')).toBe('Ñice')

      expect(capitalize('你好')).toBe('你好') // No change - Chinese has no capital letters
      expect(capitalize('你好')).toBe('你好') // No change - Japanese has no capital letters
      expect(capitalize('مرحبا')).toBe('مرحبا') // No change - Arabic has no capital letters
      expect(capitalize('नमस्ते')).toBe('नमस्ते') // No change - Hindi has no capital letters
      expect(capitalize('สวัสดี')).toBe('สวัสดี') // No change - Thai has no capital letters
    })
  })
})
