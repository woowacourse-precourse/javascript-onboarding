/*
  구현할 기능 목록
  [O] 해당 숫자가 3, 6, 9 중 하나인지 확인하는 기능 | return 값 : 1(3, 6, 9 중 하나인 경우) / 0(3, 6, 9 중 하나가 아닌 경우)
  [O] 해당 숫자를 각 자리수로 쪼개어, 각 자리수마다 3, 6, 9인지 확인하는 기능
*/

function problem3(number) {
  let result = 0;

  for (let num = 1; num <= number; num++) {
    num
      .toString()
      .split('')
      .forEach((digit) => (result += isThreeSixNine(Number(digit))));
  }

  return result;
}

function isThreeSixNine(digit) {
  const threeSixNine = [3, 6, 9];
  return threeSixNine.includes(digit) ? 1 : 0;
}

module.exports = problem3;
