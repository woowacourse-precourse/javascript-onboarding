// 페이지 각 자릿수 더하는 함수
function addSum(num) {
  let sum = 0;
  for (let digit of String(num)) {
    sum += +digit;
  }
  return sum;
}

// 페이지 각 자릿수 곱하는 함수
function mulSum(num) {
  let sum = 1;
  for (let digit of String(num)) {
    sum *= +digit;
  }
  return sum;
}

// 규칙 4. 규칙 2 ~ 3에서 가장 큰 수를 본인 점수로 하기
function selectTopNum(leftPage, rightPage) {
  let addSumLeft = addSum(leftPage);
  let addSumRight = addSum(rightPage);
  let mulSumLeft = mulSum(leftPage);
  let mulSumRight = mulSum(rightPage);

  return Math.max(addSumLeft, addSumRight, mulSumLeft, mulSumRight);
}

// 규칙 5. 점수를 비교해서 승자 정하기
function compareResult(topNumPobi, topNumCrong) {
  // pobi가 이기면 1
  if (topNumPobi > topNumCrong) return 1;
  //  crong이 이기면 2
  else if (topNumPobi < topNumCrong) return 2;
  // 무승부는 0
  else if (topNumPobi == topNumCrong) return 0;
}

function passEdgeCase(leftPage, rightPage) {
  // 엣지 케이스 1. 오른쪽 페이지는 왼쪽 페이지 + 1 이어야함
  if (leftPage + 1 !== rightPage) return false;

  // 엣지 케이스 2. 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수여야 함
  if (leftPage % 2 !== 1 || rightPage % 2 !== 0) return false;

  // 엣지 케이스 3. 첫 페이지나 마지막 면이 나오면 안된다.
  if (leftPage == 1 || rightPage == 400) return false;

  // 엣지 케이스 모두 통과하면 true 반환
  return true;
}

function problem1(pobi, crong) {
  var answer;

  // 엣지 케이스 통과 못하면 바로 -1 반환
  if (!passEdgeCase(...pobi) || !passEdgeCase(...crong)) return -1;

  // 규칙 4. 규칙 2 ~ 3 에서 가장 큰 수를 본인 점수로 하기
  let topNumPobi = selectTopNum(...pobi);
  let topNumCrong = selectTopNum(...crong);

  // 규칙 5. 점수를 비교해서 승자 정하기
  answer = compareResult(topNumPobi, topNumCrong);

  return answer;
}

module.exports = problem1;
