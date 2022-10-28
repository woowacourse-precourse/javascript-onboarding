/*
[x] 숫자를 인수로 받아 손뼉치는 횟수를 구하는 기능을 구현한다.
[ ] 1부터 number까지 손뼉치는 횟수를 구하는 기능을 구현하고 결과를 반환한다.
*/

function countClap369(number) {
  const targetNumbers = ["3", "6", "9"];
  let clapCount = 0;
  for (const charNumber of [...String(number)]) {
    if (targetNumbers.includes(charNumber)) {
      clapCount += 1;
    }
  }
  return clapCount;
}

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
