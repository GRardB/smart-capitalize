import { capitalize, capitalizeAll } from '../smart-capitalize'

describe('smart-capitalize', () => {
  describe('capitalize', () => {
    test('It capitalizes a word with lowercase letters', () => {
      expect(capitalize('hello')).toBe('Hello')
    })

    test('It does not capitalize multiple words', () => {
      expect(capitalize('hello, how are you?')).toBe('Hello, how are you?')
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
      // capitalize
      expect(capitalize('это')).toBe('Это')
      expect(capitalize('ñice')).toBe('Ñice')

      // leave alone
      expect(capitalize('Это')).toBe('Это')
      expect(capitalize('ñicE')).toBe('ñicE')

      expect(capitalize('你好')).toBe('你好') // No change - Chinese has no capital letters
      expect(capitalize('مرحبا')).toBe('مرحبا') // No change - Arabic has no capital letters
      expect(capitalize('नमस्ते')).toBe('नमस्ते') // No change - Hindi has no capital letters
      expect(capitalize('สวัสดี')).toBe('สวัสดี') // No change - Thai has no capital letters
    })
  })

  describe('capitalizeAll', () => {
    test('It capitalizes a word with lowercase letters', () => {
      expect(capitalize('hello')).toBe('Hello')
    })

    test('It capitalizes multiple words', () => {
      expect(capitalizeAll('hello, how are you?')).toBe('Hello, How Are You?')
    })

    test('It capitalizes hyphenated names', () => {
      expect(capitalizeAll("gerard tran-o'neill")).toBe("Gerard Tran-O'Neill")
      expect(capitalizeAll('foo bar-herpderp')).toBe('Foo Bar-Herpderp')
    })

    test('It does nothing to empty strings', () => {
      expect(capitalizeAll('')).toBe('')
    })

    test('It skips whitespace at the beginning of the string', () => {
      expect(capitalizeAll('  hey, dude')).toBe('  Hey, Dude')
    })

    test('It does not capitalize anything that already has an uppercase letter in it', () => {
      expect(capitalizeAll('hEllo')).toBe('hEllo')
      expect(capitalizeAll("Gerard O'neill")).toBe("Gerard O'neill")
      expect(capitalizeAll("my name is Gerard O'Neill")).toBe(
        "my name is Gerard O'Neill",
      )
      expect(capitalizeAll('my name is Hyphenated-Name')).toBe(
        'my name is Hyphenated-Name',
      )
    })

    test('It works with non-English alphabets', () => {
      // capitalize
      expect(capitalizeAll('нет, вы не можете')).toBe('Нет, Вы Не Можете')
      expect(capitalizeAll('ñice ójos, brö!')).toBe('Ñice Ójos, Brö!')

      // leave alone
      expect(capitalizeAll('нет, Вы не можете')).toBe('нет, Вы не можете')
      expect(capitalizeAll('ñice Ójos, brö!')).toBe('ñice Ójos, brö!')

      expect(capitalizeAll('你 好')).toBe('你 好') // No change - Chinese has no capital letters
      expect(capitalizeAll('مر حبا')).toBe('مر حبا') // No change - Arabic has no capital letters
      expect(capitalizeAll('न मस्ते')).toBe('न मस्ते') // No change - Hindi has no capital letters
      expect(capitalizeAll('สว ัสดี')).toBe('สว ัสดี') // No change - Thai has no capital letters
    })
  })
})
