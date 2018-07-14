export const capitalize = (s: string) => {
  if (hasUpperCaseLetters(s)) return s

  const firstIndex = getFirstLowerCaseIndex(s)

  if (firstIndex < 0) return s

  return [
    s.substring(0, firstIndex),
    s[firstIndex].toLocaleUpperCase(),
    s.substring(firstIndex + 1),
  ].join('')
}

export const capitalizeAll = (s: string) => {
  if (hasUpperCaseLetters(s)) return s

  let end

  let capitalized = ''
  let remaining = s

  while (remaining.length > 0) {
    end = getFirstNonAlphanumericSymbolIndex(remaining)

    if (end < 0) {
      capitalized += capitalize(remaining)
      remaining = ''
    } else if (end === 0) {
      capitalized += remaining[0]
      remaining = remaining.substring(1)
    } else {
      capitalized += capitalize(remaining.substring(0, end))
      remaining = remaining.substring(end)
    }
  }

  return capitalized
}

// I would love to use regular expressions for all of the following code,
// but unfortunately, JS does not yet support Unicode property escapes
// https://github.com/tc39/proposal-regexp-unicode-property-escapes
const hasUpperCaseLetters = (s: string) => {
  for (var i = 0; i < s.length; i++) {
    if (isUpperCase(s[i])) return true
  }

  return false
}

const getFirstLowerCaseIndex = (s: string) => {
  for (var i = 0; i < s.length; i++) {
    if (isLowerCase(s[i])) return i
  }

  return -1
}

const isUpperCase = (s: string) => {
  // It's not enough to test if a letter is uppercase or lowercase.
  // We also need to make sure that the character has two cases
  return s !== s.toLocaleLowerCase() && s === s.toLocaleUpperCase()
}

const isLowerCase = (s: string) => {
  return s === s.toLocaleLowerCase() && s !== s.toLocaleUpperCase()
}

const getFirstNonAlphanumericSymbolIndex = (s: string) => {
  for (var i = 0; i < s.length; i++) {
    // We consider anything a non-alphanumeric symbol if it can't be capitalized
    // and if it's not a number. This will consider letters/words in certain languages
    // to be symbols, but presumably, most people won't be mixing languages like你this
    if (!isLowerCase(s[i]) && !isUpperCase(s[i]) && isNaN(parseInt(s[i], 10))) {
      return i
    }
  }

  return -1
}
