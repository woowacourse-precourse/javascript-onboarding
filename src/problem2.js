function problem2(cryptogram) {
  return deleteDuplicateCharacters(cryptogram);
}

const deleteDuplicateCharacters = (string) => {
  let result = ''
  if (string[0] !== string[1]) {
    result += string[0]
  }

  for (let i = 1; i < string.length - 1 ; i++) {
    if (string[i - 1] !== string[i] && string[i] !== string[i + 1]) {
      result += string[i]
    }
  }

  if (string[string.length - 2] !== string[string.length - 1]) {
    result += string[string.length - 1]
  }

  if (result !== string) {
    result = deleteDuplicateCharacters(result)
  }
  return result
}

module.exports = problem2;
