function problem4(word) {
  var answer;
  return answer;
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
