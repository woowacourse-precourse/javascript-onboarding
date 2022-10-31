function problem1(pobi, crong) {
  return compareResult(pobi, crong);
}

function addSum(num) {
  let sum = 0;

  for (let digit of String(num)) sum += +digit;
  
  return sum;
}

function mulSum(num) {
  let sum = 1;
  for (let digit of String(num)) sum *= +digit;
  
  return sum;
}

function selectTopNum(leftPage, rightPage) {
  let addSumLeft = addSum(leftPage);
  let addSumRight = addSum(rightPage);
  let mulSumLeft = mulSum(leftPage);
  let mulSumRight = mulSum(rightPage);

  return Math.max(addSumLeft, addSumRight, mulSumLeft, mulSumRight);
}

function compareResult(pobi, crong) {
  if (!passEdgeCase(...pobi) || !passEdgeCase(...crong)) return -1;

  let topNumPobi = selectTopNum(...pobi);
  let topNumCrong = selectTopNum(...crong);

  if (topNumPobi > topNumCrong) return 1;
  else if (topNumPobi < topNumCrong) return 2;
  else if (topNumPobi == topNumCrong) return 0;
}

function passEdgeCase(leftPage, rightPage) {
  // 엣지 케이스 1. 오른쪽 페이지는 왼쪽 페이지 + 1 이어야함
  if (leftPage + 1 !== rightPage) return false;

  // 엣지 케이스 2. 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수여야 함
  if (leftPage % 2 !== 1 || rightPage % 2 !== 0) return false;

  // 엣지 케이스 3. 첫 페이지나 마지막 면이 나오면 안된다.
  if (leftPage == 1 || rightPage == 400) return false;

  return true;
}

module.exports = problem1;
