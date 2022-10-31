function isInPage(pobiPages, crongPages) {
  if (
    pobiPages.every((page) => page >= 1 && page <= 400) &&
    crongPages.every((page) => page >= 1 && page <= 400)
  ) return true;

  return false;
}

function isLengthTwo(pobiPages, crongPages) {
  if (
    pobiPages.length === 2 && 
    crongPages.length === 2
  ) return true;

  return false;
}

function checkNextPage(pobiPages, crongPages) {
  if (
    pobiPages[1] - pobiPages[0] === 1 && 
    crongPages[1] - crongPages[0] === 1
  ) return true;

  return false;
}

function checkLeftPageOdd(pobiPages, crongPages) {
  if (
    pobiPages[0] % 2 === 1 && 
    crongPages[0] % 2 === 1
  ) return true;

  return false;
}

function isExceptions(pobiPages, crongPages) {
  if (
    !isInPage(pobiPages, crongPages) ||
    !isLengthTwo(pobiPages, crongPages) ||
    !checkNextPage(pobiPages, crongPages) ||
    !checkLeftPageOdd(pobiPages, crongPages)
  ) return true;

  return false;
}

function getBiggerNum(page) {
  const add = String(page)
    .split("")
    .reduce((acc, cur) => +acc + +cur, 0);
  const multiply = String(page)
    .split("")
    .reduce((acc, cur) => +acc * +cur, 1);
  const biggerNum = Math.max(add, multiply);

  return biggerNum;
}

function getScore(pobiPages, crongPages) {
  const pobiScore = Math.max(
    ...pobiPages.map((pobiPage) => getBiggerNum(pobiPage))
  );
  const crongScore = Math.max(
    ...crongPages.map((crongPage) => getBiggerNum(crongPage))
  );

  return [pobiScore, crongScore];
}

function problem1(pobi, crong) {
  if (isExceptions(pobi, crong)) return -1;

  const [pobiScore, crongScore] = getScore(pobi, crong);

  if (pobiScore === crongScore) return 0;
  else if (pobiScore > crongScore) return 1;
  else return 2;
}

module.exports = problem1;
