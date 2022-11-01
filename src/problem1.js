function sumOfPage(page) {
  const pageToString = Array.from(String(page), (digit) => Number(digit));
  const result = pageToString.reduce((a, b) => a + b);
  return result;
}

function multiplyOfPage(page) {
  const pageToString = Array.from(String(page), (digit) => Number(digit));
  const result = pageToString.reduce((a, b) => a * b);
  return result;
}

function checkExcept(pobi, crong) {
  const STARTPAGE = 1;
  const LASTPAGE = 400;

  /**
   * 페이지가 시작페이지거나 마지막 페이지쪽을 열었을 경우
   */
  if (
    (pobi[0] === STARTPAGE && pobi[1] === STARTPAGE + 1) ||
    (pobi[0] === LASTPAGE - 1 && pobi[1] === LASTPAGE) ||
    (crong[0] === STARTPAGE && crong[1] === STARTPAGE + 1) ||
    (crong[0] === LASTPAGE - 1 && crong[1] === LASTPAGE)
  ) {
    return false;
  }
  /**
   * 양쪽 페이지가 아닐 경우
   */
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) {
    return false;
  }

  return true;
}

function problem1(pobi, crong) {
  const CRONGWIN = 2;
  const POBIWIN = 1;
  const SAME = 0;
  const EXCEPT = -1;
  if (!checkExcept(pobi, crong)) {
    return EXCEPT;
  }
  const pobisNumbers = [
    sumOfPage(pobi[0]),
    sumOfPage(pobi[1]),
    multiplyOfPage(pobi[0]),
    multiplyOfPage(pobi[1]),
  ];
  const crongsNumbers = [
    sumOfPage(crong[0]),
    sumOfPage(crong[1]),
    multiplyOfPage(crong[0]),
    multiplyOfPage(crong[1]),
  ];
  const pobiMax = Math.max(...pobisNumbers);
  const crongsMax = Math.max(...crongsNumbers);
  if (pobiMax > crongsMax) {
    return POBIWIN;
  } else if (crongsMax > pobiMax) {
    return CRONGWIN;
  } else if (crongsMax === pobiMax) {
    return SAME;
  }
}
module.exports = problem1;
