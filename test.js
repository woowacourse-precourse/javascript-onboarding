/* 문제 분석
1. 청개구리 사전에 맞춰서 데이터를 변환하여 출력해야한다.
2. 대소문자를 구분해서 반환한다.
 */
/* 테스트 케이스 분석

 */

let alpha = [
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

let flogCase = [...alpha].reverse();

function toFlogCase(char) {
  let c = char.toUpperCase();
  let index = alpha.indexOf(c);
  let changed = flogCase[index] ?? " ";
  if (char.charCodeAt(0) >= 97) return changed.toLowerCase();
  return changed;
}

// main
function problem4(word) {
  var answer = [];
  for (let i of [...word]) {
    answer.push(toFlogCase(i));
  }
  return answer.join("");
}

console.log(problem4("I love You"));
