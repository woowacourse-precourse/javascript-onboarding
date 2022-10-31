//점수 계산 함수
function calcScore(page) {
  let leftNum = page[0];
  let rightNum = page[1];

  let leftSum = 0;
  let leftMulti = 1;
  let rightSum = 0;
  let rightMulti = 1;

  //왼쪽 페이지 계산
  while(leftNum > 0) {
    leftSum += leftNum % 10;
    leftMulti *= leftNum % 10;

    leftNum = parseInt(leftNum/10);
  }
  let leftMax = leftSum > leftMulti ? leftSum : leftMulti;

  //오른쪽 페이지 계산
  while(rightNum > 0) {
    rightSum += rightNum % 10;
    rightMulti *= rightNum % 10;

    rightNum = parseInt(rightNum/10);
  }
  let rightMax = rightSum > rightMulti ? rightSum : rightMulti;
  let max = leftMax > rightMax ? leftMax : rightMax;

  return max;
}

//예외 처리 (연속된 페이지인지 확인)
function isNormal(page) {
  if(page[0]+1 == page[1]) {
    return true
  }
  return false
}

function problem1(pobi, crong) {
  var answer;

  if(isNormal(pobi) && isNormal(crong)) {

    //점수계산
    let pobiScore = calcScore(pobi);
    let crongScore = calcScore(crong);

    //결과
    if(pobiScore > crongScore) answer = 1;
    else if(pobiScore < crongScore) answer = 2;
    else if(pobiScore == crongScore) answer = 0;
  }
  else {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;


