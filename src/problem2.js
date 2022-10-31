function problem2(cryptogram) {
  //중복제거 함수
  const deleteWords = (tmpString) => {
    for (let i = 0; i < tmpString.length; i++) {
      //하나의 문자를 지정한 뒤
      let word = tmpString[i]
      let count = 1
      for (let j = i + 1; j < tmpString.length; j++) {
        //그 문자가 연속된 만큼 count
        if (tmpString[j] === word) {
          count++
        } else {
          break
        }
      }

      //연속된 갯수만큼 삭제
      if (count !== 1) {
        tmpString.splice(i, count)
      }
    }

    return tmpString
  }

  let answer = cryptogram.split('')

  while (1) {
    //삭제한 값이 이전과 같다면 최종 리턴
    //(조건문에서 바로 deleteWords를 실행한 값과 비교)
    if (answer.join('') === deleteWords(answer).join('')) {
      return answer.join('')
    }
  }
}

module.exports = problem2
