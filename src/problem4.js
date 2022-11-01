function problem4(word) {
  var answer = '';

  for (let i = 0; i < word.length; i++) {
    const code = word[i].charCodeAt()
    answer += String.fromCharCode(revertCharCode(code))
  }

  return answer;
}

const findCase = (code) => {
  if(65 <= code && code <= 90)return 'upperCase'
  if(97 <= code && code <= 122)return 'lowerCase'
  return 'notAlphabet'
}

const revertCharCode = (code) => {
  const charCase = findCase(code)
  if(charCase === 'notAlphabet')return code

  let firstCode = 65
  let lastCode = 90
  
  if(charCase === 'lowerCase'){
    firstCode = 97
    lastCode = 122
  }

  return firstCode + (lastCode - code)
}

module.exports = problem4;
