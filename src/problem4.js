function problem4(word) {
  // 청개구리 사전 (인덱스 = A~Z, 값 = Z~A)
  const dictionary = Array.from('ZYXWVUTSRQPONMLKJIHGFEDCBA')

  // word의 각 문자를 순환하면서 변환
  result = ''
  superedWord = word.toUpperCase()
  for (let i = 0; i < superedWord.length; i++) {
    // 공백인 경우
    if (superedWord[i] === ' ') {
      result += ' '
      continue
    }

    // 청개구리 사전을 참고해 반대로 변환
    if (word[i] === word[i].toUpperCase()) {   // 대문자인 경우
      result += dictionary[superedWord.charCodeAt(i) - 65]
    } else {   // 소문자인 경우
      result += dictionary[superedWord.charCodeAt(i) - 65].toLowerCase()
    }
  }

  return result
}

module.exports = problem4;
