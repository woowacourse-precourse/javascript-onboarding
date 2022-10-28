// 기능 요구 사항
// 청개구리! - 알파벳을 반대로 변환하여 return 한다.
// A -> Z, B -> Y, ... Z -> A
// ex) I love you -> R olev blf
// - [o] 대문자(A~Z(65~90))의 경우 65 + (90 - alpha)를 return
// - [o] 소문자(a~z(97~122))의 경우 97 + (122 - alpha)를 return
// - [o] 공백(띄워쓰기(32))의 경우 공백을 추가한다.

function problem4(word) {
  let answer = '';
  for(let i = 0; i < word.length; i++) {
    let ascii = word.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) { // 대문자
      answer += String.fromCharCode(65 + 90 - ascii);
    } else if (ascii >= 97 && ascii <= 122) { // 소문자
      answer += String.fromCharCode(97 + 122 - ascii);
    } else {
      answer += String.fromCharCode(ascii);
    }
  }
  return answer;
}

console.log(problem4("I love you"));
module.exports = problem4;
