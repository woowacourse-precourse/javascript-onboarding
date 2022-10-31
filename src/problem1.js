// 페이지 번호 각 자리 숫자를 모두 더해 반환하는 기능
function getSum(n) {
  let sum = 0;
  let number = n.toString();
  [...number].forEach(i => sum += parseInt(i));
  return sum;
}

// 페이지 번호 각 자리 숫자를 모두 곱해 반환하는 기능
function getMulti(n) {
  let multi = 1;
  let number = n.toString();
  [...number].forEach(i => multi *= parseInt(i));
  return multi;
}

// 각 페이지별로 각 자리 숫자를 모두 더하거나 곱해서 나온 수들 중 최댓값을 반환하는 기능
function getScore(page) {
  return Math.max(getSum(page[0]), getMulti(page[0]), getSum(page[1]), getMulti(page[1]));
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
