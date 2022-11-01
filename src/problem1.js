function addNumber(num) {
  const cnt = num
    .toString()
    .split("")
    .map((x) => parseInt(x));
  return cnt.reduce((sum, cur) => sum + cur, 0);
}

function mulNumber(num) {
  const cnt = num
    .toString()
    .split("")
    .map((x) => parseInt(x));
  return cnt.reduce((sum, cur) => sum * cur);
}

function problem1(pobi, crong) {
  var answer;
  // 왼쪽 페이지 + 1 === 오른쪽 페이지가 아닐 때
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) return -1;
  // 왼쪽 페이지가 홀수가 아닐 때
  else if (pobi[0] % 2 !== 1 || crong[0] % 2 !== 1) return -1;

  return answer;
}

module.exports = problem1;
