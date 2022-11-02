function addDigit(num) {
  return [...String(num)].reduce((prev, next) => Number(prev) + Number(next));
}

function multiplyDigit(num) {
  return [...String(num)].reduce((prev, next) => Number(prev) * Number(next));
}

function findMaxNum(pageArr) {
  const nums = [];
  pageArr.map((page) => {
    nums.push(addDigit(page));
    nums.push(multiplyDigit(page));
  });

  return Math.max(...nums);
}

function calculateScore(pobi, crong) {
  if (pobi > crong) return 1;
  else if (pobi < crong) return 2;
  else if (pobi === crong) return 0;
}

function checkValidPage(pageArr) {
  const [prevPage, nextPage] = pageArr;

  // number인지 확인
  if (typeof prevPage !== "number" || typeof nextPage !== "number")
    return false;

  // nextPage가 prevPage보다 1 큰지 확인
  if (nextPage - prevPage !== 1) return false;

  return true;
}

function problem1(pobi, crong) {
  if (!checkValidPage(pobi) || !checkValidPage(crong)) return -1;

  const pobiNum = findMaxNum(pobi);
  const crongNum = findMaxNum(crong);
  const finalScore = calculateScore(pobiNum, crongNum);

  return finalScore;
}

// console.log(problem1([97, 98], [197, 198]));
// console.log(problem1([131, 132], [211, 212]));
// console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
