// 1. 예외 처리
// 2. pobi와 crong의 각 페이지의 합, 곱 계산
// 3. pobi와 crong의 각각 최대값 계산
// 4. 비교
function calValue(page) {
  const data = page
    .toString()
    .split("")
    .map((x) => parseInt(x));
  const sum = data.reduce((acc, cur) => parseInt(acc) + parseInt(cur));
  const times = data.reduce((acc, cur) => acc * cur);
  return sum >= times ? sum : times;
}

function problem1(pobi, crong) {
  var answer;

  //except
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  //Calculate Max Value
  let pobiMax = Math.max(calValue(pobi[0]), calValue(pobi[1]));
  let crongMax = Math.max(calValue(crong[0]), calValue(crong[1]));

  return answer;
}

module.exports = problem1;
