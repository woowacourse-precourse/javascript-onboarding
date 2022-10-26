function problem1(pobi, crong) {
  // 포비와 크롱의 가장 큰값을 찾는다. getMaxNumber
  // pobiMaxNum  , crongMaxNum 비교
  // 비교후 결과를 반환한다
}

function getMaxNumber(oddNumber, evenNumber) {
  // 모두 곱해서 나온결과  와 모두 더해서 나온 결과를 비교하기
  // 더 큰값을 반환한다
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
  // number의 모두 곱한 값을 반환
}

module.exports = problem1;
