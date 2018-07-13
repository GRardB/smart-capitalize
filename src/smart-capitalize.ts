export const capitalize = (s: string) => {
  if (hasCapitalLetters(s)) return s

  const firstIndex = s.search(/\w/)

  if (firstIndex < 0) return s

  return [
    s.substring(0, firstIndex),
    s[firstIndex].toLocaleUpperCase(),
    s.substring(firstIndex + 1),
  ].join('')
}

const hasCapitalLetters = (s: string) => {
  for (var i = 0; i < s.length; i++) {
    const lowercase = s[i].toLocaleLowerCase()
    const uppercase = s[i].toLocaleUpperCase()
    // It's not enough to test if a letter is uppercase or lowercase.
    // We also need to make sure that the character has two cases
    if (s[i] !== lowercase && s[i] === uppercase) {
      return true
    }
  }

  return false
}
