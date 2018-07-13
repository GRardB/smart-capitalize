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

// I would love to use a regexp for this, but unfortunately, JS
// does not yet support Unicode property escapes
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
