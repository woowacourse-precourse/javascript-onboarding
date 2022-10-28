function problem4(word) {
  const wordChar = word.split('')
  const changeChar = (char) => {
    if (/^[a-z]*$/.test(char)) char = reverseChar(char)
    if (/^[A-Z]*$/.test(char)) char = reverseChar(char.toLowerCase()).toUpperCase()
    return char
  }
  const changedWord = wordChar.map((char) => changeChar(char)).join("")
  return changedWord
}

function reverseChar(char) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let frogDic = new Object()
  
  for (let i = 0; i < alphabet.length; i++) {
    let key = alphabet[i]
    frogDic[key] = alphabet[alphabet.length - 1 - i]
  }
  return frogDic[char]
}

module.exports = problem4;
