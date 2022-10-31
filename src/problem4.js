/* 문제 분석
1. 청개구리 사전에 맞춰서 데이터를 변환하여 출력해야한다.
2. 대소문자를 구분해서 반환한다.
 */
/* 테스트 케이스 분석
tc1. I Love you
R olev blf 로 대응
 */

// 기존 알파벳
const alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// 청개구리 사전
const flogCase = [...alpha].reverse();

// 특정 문자를 인수로 받아서, 청개구리 사전에 맞춰서 변환
function toFlogCase(char) {
  // 먼저 특정 문자를 대문자로 치환하여 c에 저장.
  let c = char.toUpperCase();

  // c의 인덱스를 찾는다.
  let index = alpha.indexOf(c);

  // index를 활용하여 청개구리 사전에서 대응되는 문자를 찾는다. (또는 공백)
  let changed = flogCase[index] ?? " ";

  // 만약, 기존 문자(char)가 소문자라면, 소문자로 리턴. 대문자면 그대로 대문자로 리턴
  if (char.charCodeAt(0) >= 97) return changed.toLowerCase();
  return changed;
}

// main
function problem4(word) {
  var answer = [];
  // 문자열을 배열로 바꾸고, 순회하면서 FlogCase를 적용한다.
  for (let i of [...word]) {
    answer.push(toFlogCase(i));
  }
  return answer.join("");
}

module.exports = problem4;
