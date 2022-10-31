// **기능 요구 사항**
// 1. 기존 문자를 아스키 코드로 변환한다.
// 2. 변환된 아스키 코드를 활용하여 word를 청개구리 사전에 매칭시킨다.
// 3. 청개구리 결과를 반환한다.


function problem4(word) {
  let array = word.toString()
  let new_arr = []

  console.log(array)
  for (let i = 0; i < array.length; i++) {
    console.log(array.charCodeAt(i))
    if (array.charCodeAt(i) >= 65 && array.charCodeAt(i) <= 90) {
      array[i] = String.fromCharCode(155 - array.charCodeAt(i))
      new_arr += (String.fromCharCode(155 - array.charCodeAt(i)))
    } else if (array.charCodeAt(i) >= 97 && array.charCodeAt(i) <= 122) {
      array[i] = String.fromCharCode(219 - array.charCodeAt(i))
      new_arr += (String.fromCharCode(219 - array.charCodeAt(i)))
    } else {
      array[i] = array[i]
      new_arr += (String.fromCharCode(array.charCodeAt(i)))
    }
  }

  return new_arr
}

module.exports = problem4;
