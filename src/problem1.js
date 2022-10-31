/** 입력받은 숫자의 각 자리수를 더한 값을 반환하는 함수 **/
function add(page) {
  let number = 0;
  while (page > 0) {
    number = number + (page % 10);
    page = Math.floor(page / 10);
  }
  return number;
}

/** 입력받은 숫자의 각 자리수를 곱한 값을 반환하는 함수 **/
function multiply(page) {
  let number = 1;
  while (page > 0) {
    number = number * (page % 10);
    page = Math.floor(page / 10);
  }
  return number;
}

/** 펼친 페이지 숫자가 들어있는 배열을 입력받아서 게임 규칙에 따라 큰 수를 찾아 반환하는 함수 **/
function findLargeNumber(name) {
  let largeNumber = 0;
  for (let i = 0; i < 2; i++) {
    largeNumber = Math.max(largeNumber, add(name[i]), multiply(name[i]));
  }
  return largeNumber;
}

function problem1(pobi, crong) {
  var answer;

  if (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1]) return -1;

  scorePobi = findLargeNumber(pobi);
  scoreCrong = findLargeNumber(crong);

  if (scorePobi > scoreCrong) answer = 1;
  else if (scorePobi < scoreCrong) answer = 2;
  else if (scorePobi === scoreCrong) answer = 0;
  else answer = -1;

  return answer;
}

module.exports = problem1;
