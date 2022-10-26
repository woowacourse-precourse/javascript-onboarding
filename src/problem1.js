/* 
구현 기능 목록
  [v] 각 자리 숫자를 모두 더하는 기능
  [v] 각 자리 숫자를 모두 곱하는 기능
  [ ] 가장 큰 수를 구하는 기능
  [ ] 점수를 비교 및 판단하는 기능
*/

function problem1(pobi, crong) {
  let answer;
  const [pobi_left, pobi_right] = pobi;
  const [crong_left, crong_right] = crong;

  console.log(sumByEachDigit(pobi_left)); // 16
  console.log(sumByEachDigit(pobi_right)); // 17
  console.log(sumByEachDigit(crong_left)); // 17
  console.log(sumByEachDigit(crong_right)); // 18

  console.log(multiplyNumbers(pobi_left)); // 63
  console.log(multiplyNumbers(pobi_right)); // 72
  console.log(multiplyNumbers(crong_left)); // 63
  console.log(multiplyNumbers(crong_right)); // 72

  return answer;
}

function sumByEachDigit(pages) {
  let sumResult = 0;
  while (pages > 0) {
    sumResult += pages % 10;
    pages = parseInt(pages / 10);
  }
  return sumResult;
}

function multiplyNumbers(pages) {
  const multiplyResult = String(pages)
    .split('')
    .reduce((acc, cur) => acc * cur);
  return multiplyResult;
}

problem1([97, 98], [197, 198]); // 0
module.exports = problem1;
