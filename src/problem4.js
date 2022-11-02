function reverseChar(char) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let frogDic = new Object()
  
  for (let alphabetIndex = 0; alphabetIndex < alphabet.length; alphabetIndex++) {
    let key = alphabet[alphabetIndex]
    frogDic[key] = alphabet[alphabet.length - 1 - alphabetIndex]
  }
  return frogDic[char]
}

function changeChar(char) {
  if (/^[a-z]*$/.test(char)) char = reverseChar(char)
  if (/^[A-Z]*$/.test(char)) char = reverseChar(char.toLowerCase()).toUpperCase()
  return char
}

function problem4(word) {
  const wordChar = word.split('')
  const changedWord = wordChar.map((char) => changeChar(char)).join("")
  return changedWord
}

module.exports = problem4;
