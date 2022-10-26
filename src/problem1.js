// 페이지 차이 확인 (ex. 99, 102)
function checkGapPages(pobi, crong) {
  if ((pobi[1] - pobi[0] > 1) || (crong[1] - crong[0] > 1)) return false;

  return true;
}

// 1페이지 ~ 400페이지 확인
function checkOverPages(pobi, crong) {
  if (
    pobi.every((page) => page >= 1 && page <= 400) &&
    crong.every((page) => page >= 1 && page <= 400)
  ) {
    return true;
  }
  return false;
}

// pobi와 crong의 길이 확인
function checkLength(pobi, crong) {
  if (pobi.length !== 2 || crong.length !== 2) return false;
  return true;
}

// Max 값 구하기
function getMax(v) {
  const add = [...(`${v}`)].reduce((prev, curr) => +prev + +curr, 0);
  const multiply = [...(`${v}`)].reduce((prev, curr) => +prev * +curr, 1);
  const max = Math.max(add, multiply);

  return max;
}

function problem1(pobi, crong) {
  if (
    !checkGapPages(pobi, crong) ||
    !checkOverPages(pobi, crong) ||
    !checkLength(pobi, crong)
  ) return -1;

  const maxPobi = Math.max.apply(null, pobi.map(v => getMax(v)));
  const maxCrong = Math.max.apply(null, crong.map(v => getMax(v)));

  if (maxPobi > maxCrong) return 1
  else if (maxPobi < maxCrong) return 2
  else return 0
}

module.exports = problem1;
