/*
<풀이> 스택구현
for문 이용하여 cryptogram의 문자열의 글자들을 한글자씩 반복적으로 뽑는다.
만약 뽑은 문자들이 stack배열의 마지막 요소와 다른지 확인
다르면 스택안에 뽑은글자를 넣는다.
같으면 stack배열의 마지막 요소를 삭제
포문 끝나고 stack 배열을 문자열로 합쳐준다.
*/

function problem2(cryptogram) {
  let stack = [];

  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] !== stack[stack.length - 1]) {
      stack.push(cryptogram[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join('');
}

module.exports = problem2;
