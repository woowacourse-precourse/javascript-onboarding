/* 
 1. 반대로 출력하기 때문에 아스키 코드 값의 합은 대문자 =155, 소문자 219로 항상 동일
 -> 반대의 문자를 리턴해주는 함수 reversAscii 작성
 2. 문자열을 배열로 구조 분해를 해서 map으로 배열 순회
*/

const reverseAscii = (elem) => {
  if (elem >= "A" && elem <= "Z") {
    return String.fromCharCode(155 - elem.charCodeAt());
  } else if (elem >= "a" && elem <= "z") {
    String.fromCharCode(219 - elem.charCodeAt());
    return String.fromCharCode(219 - elem.charCodeAt());
  }
  return elem;
};

function problem4(word) {
  let answer = "";
  let wordArr = [...word];
  wordArr.map((elem) => {
    answer += reverseAscii(elem);
  });
  return answer;
}

module.exports = problem4;
