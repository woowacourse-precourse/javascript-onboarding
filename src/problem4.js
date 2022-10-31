function problem4(word) {
  let lowerCaseStart = 97
  let lowerCaseEnd = 122

  let upperCaseStart = 65
  let upperCaseEnd = 90

  word = word.split('')

  for (let i = 0; i < word.length; i++) {

    if (word[i] === ' ') continue //공백일 경우 건너뜀 
    
    //영어 대소문자인 경우만 변환하기 위해 조건문 사용
    if (
      word[i].charCodeAt(0) >= 97 && 
      word[i].charCodeAt(0) <= 122 ||
      word[i].charCodeAt(0) >= 65 &&
      word[i].charCodeAt(0) <= 90
    ){
      if (word[i] === word[i].toUpperCase()) { //대문자일 경우
        let index = word[i].charCodeAt(0)
        index = upperCaseEnd - (index - upperCaseStart) //아스키코드를 이용해 역으로 변환
        word[i] = String.fromCharCode(index)
      } else { //소문자일 경우
        let index = word[i].charCodeAt(0)
        index = lowerCaseEnd - (index - lowerCaseStart) //아스키코드를 이용해 역으로 변환
        word[i] = String.fromCharCode(index)
      }
    }
    
  }

  return word.join('')
}

module.exports = problem4