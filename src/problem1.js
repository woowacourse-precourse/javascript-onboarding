/* 
구현 기능 목록
  [v] 각 자리 숫자를 모두 더하는 기능
  [v] 각 자리 숫자를 모두 곱하는 기능
  [v] 가장 큰 수를 구하는 기능
  [ ] 점수를 비교 및 판단하는 기능
*/

function problem1(pobi, crong) {
  let answer;
  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  console.log('pobi Result', findLargestNumber(pobiLeft, pobiRight));
  console.log('crong Result', findLargestNumber(crongLeft, crongRight));

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

function findLargestNumber(firstNumber, secondNumber) {
  const sumFirstResult = sumByEachDigit(firstNumber);
  const sumSecondResult = sumByEachDigit(secondNumber);
  const multiplyFirstResult = multiplyNumbers(firstNumber);
  const multiplySecondResult = multiplyNumbers(secondNumber);
  return Math.max(sumFirstResult, sumSecondResult, multiplyFirstResult, multiplySecondResult);
}

problem1([97, 98], [197, 198]); // 0
module.exports = problem1;
