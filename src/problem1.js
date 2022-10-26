function problem1(pobi, crong) {
  // 포비와 크롱의 가장 큰값을 찾는다. getMaxNumber
  // pobiMaxNum  , crongMaxNum 비교
  // 비교후 결과를 반환한다
}

function getMaxNumber(oddNumber, evenNumber) {
  return Math.max(
    sumNumber(oddNumber),
    multiNumber(oddNumber),
    sumNumber(evenNumber),
    multiNumber(evenNumber)
  );
}

function sumNumber(number) {
  let sum = 0;
  number
    .toString()
    .split("")
    .map((num) => (sum += Number(num)));

  return sum;
}
function multiNumber(number) {
  let multi = 1;
  number
    .toString()
    .split("")
    .map((num) => (multi *= Number(num)));

  return multi;
}

module.exports = problem1;
