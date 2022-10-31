// **기능 요구 사항**
// 1. 기존 문자를 아스키 코드로 변환한다.
// 2. 변환된 아스키 코드를 활용하여 word를 청개구리 사전에 매칭시킨다.
// 3. 청개구리 결과를 반환한다.


function problem4(word) {
  let array = word.toString().split('')
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    if (array[i].charCodeAt(4) >= 65 && array[i].charCodeAt(4) <= 90) {
      array[i] = String.fromCharCode(155 - array[i].charCodeAt(4))
    } else if (array[i].charCodeAt(4) >= 97 && array[i].charCodeAt(4) <= 122) {
      array[i] = String.fromCharCode(219 - array[i].charCodeAt(4))
    }
  }
  console.log(array)
}

module.exports = problem4;

problem4("I love you")