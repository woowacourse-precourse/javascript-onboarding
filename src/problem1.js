// 1. 예외 처리
// 2. pobi와 crong의 각 페이지의 합, 곱 계산
// 3. pobi와 crong의 각각 최대값 계산
// 4. 비교
function calSumValue(splitPage) {
  return splitPage.reduce((acc, cur) => parseInt(acc) + parseInt(cur));
}
function calTimesValue(splitPage) {
  return splitPage.reduce((acc, cur) => acc * cur);
}
function calValue(page) {
  const data = Array.from(page.toString());
  const sum = calSumValue(data);
  const times = calTimesValue(data);
  return sum >= times ? sum : times;
}

function problem1(pobi, crong) {
  var answer;

  const pobiLeft = pobi[0];
  const pobiRight = pobi[1];
  const crongLeft = crong[0];
  const crongRight = crong[1];

  //except
  if (pobiRight - pobiLeft !== 1 || crongRight - crongLeft !== 1) return -1;

  //Calculate Max Value
  let pobiMax = Math.max(calValue(pobiLeft), calValue(pobiRight));
  let crongMax = Math.max(calValue(crongLeft), calValue(crongRight));

  //Compare
  if (pobiMax === crongMax) {
    return (answer = 0);
  }
  return pobiMax > crongMax ? (answer = 1) : (answer = 2);
}

module.exports = problem1;
