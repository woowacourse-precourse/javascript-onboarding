// 페이지 차이 확인 (ex. [99, 102], [96, 97])
function checkGapPages(pobi, crong) {
  return pobi[1] - pobi[0] === 1 && crong[1] - crong[0] === 1;
}

// 왼쪽 홀수 확인
function checkOddPages(pobi, crong) {
  return pobi[0] % 2 === 1 && crong[0] % 2 === 1;
}

// 1페이지 ~ 400페이지 확인
function checkOverPages(pobi, crong) {
  return pobi.every((page) => page >= 1 && page <= 400) && crong.every((page) => page >= 1 && page <= 400);
}

// pobi와 crong의 길이 확인
function checkLength(pobi, crong) {
  return pobi.length === 2 && crong.length === 2;
}


// Max 값 구하기
function getMax(v) {
  const add = [...(`${v}`)].reduce((prev, curr) => +prev + +curr, 0);
  const multiply = [...(`${v}`)].reduce((prev, curr) => +prev * +curr, 1);
  const max = Math.max(add, multiply);

  return max;
}

function biggerThenPobi(maxPobi, maxCrong) {
  return maxPobi > maxCrong && 1;
}

function biggerThenCrong(maxPobi, maxCrong) {
  return maxPobi < maxCrong && 2;
}

function checkValidation(pobi, crong) {
  return (!checkGapPages(pobi, crong) || !checkOverPages(pobi, crong) || !checkLength(pobi, crong) || !checkOddPages(pobi, crong)) && -1
}

function problem1(pobi, crong) {
  const maxPobi = Math.max.apply(null, pobi.map(v => getMax(v)));
  const maxCrong = Math.max.apply(null, crong.map(v => getMax(v)));

  return checkValidation(pobi, crong) || biggerThenPobi(maxPobi, maxCrong) || biggerThenCrong(maxPobi, maxCrong) || 0;
}

module.exports = problem1;
