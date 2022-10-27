function problem1(pobi, crong) {
  // 시작 페이지가 [1,2]이거나 마지막 페이지가 [399,400]이 되지 않도록 한다.
  if ((pobi[0], crong[0] === 1 || pobi[0], crong[0] === 399)) {
    return -1;
  }

  // 왼쪽 페이지와 오른쪽 페이지는 불연속적일 수 없다.
  if (pobi[0] - pobi[1] != -1 || crong[0] - crong[1] != -1) {
    return -1;
  }

  const pobiScore = compareScore(sumOrMul(pobi[0]), sumOrMul(pobi[1]));
  const crongScore = compareScore(sumOrMul(crong[0]), sumOrMul(crong[1]));
}

function compareScore(leftPage, rightPage) {}

function sumOrMul(page) {}

module.exports = problem1;
