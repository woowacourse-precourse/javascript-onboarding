/*
[x] 숫자를 인수로 받아 손뼉치는 횟수를 구하는 기능을 구현한다.
[x] 1부터 number까지 손뼉치는 횟수를 구하는 기능을 구현하고 결과를 반환한다.
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
  let clapCount = 0;
  for (let num = 1; num <= number; num += 1) {
    clapCount += countClap369(num);
  }
  return clapCount;
}

module.exports = problem3;
