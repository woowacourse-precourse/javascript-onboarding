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
  if (pobiScore > crongScore) {
    return 1;
  }
  if (pobiScore < crongScore) {
    return 2;
  }
  if (pobiScore === crongScore) {
    return 0;
  }
}

function compareScore(leftPage, rightPage) {
  if (leftPage > rightPage) {
    return leftPage;
  }
  if (leftPage < rightPage) {
    return rightPage;
  }
  if (leftPage === rightPage) {
    // 같은 경우 아무거나 반환한다.
    return leftPage;
  }
}

function sumOrMul(page) {
  const hundred = Math.floor(page / 100);
  const ten = Math.floor((page % 100) / 10);
  const one = page % 10;

  let sum = hundred + ten + one;
  let multiply = 0;
  if (page < 10) {
    multiply = one;
  }
  if (page >= 10 && page < 100) {
    multiply = ten * one;
  }
  if (page >= 100 && page <= 400) {
    multiply = hundred * ten * one;
  }

  if (sum > multiply) {
    return sum;
  }
  if (sum < multiply) {
    return multiply;
  }
  if (sum === multiply) {
    // 같은 경우 아무거나 반환한다.
    return sum;
  }
}

module.exports = problem1;
