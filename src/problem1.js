function makeSplitedArr(eachSideNum) {
  let eachSide = eachSideNum;

  eachSide = eachSide
    .toString()
    .split("")
    .map((item) => Number(item));

  return eachSide;
}

function sumCalc(eachSide) {
  let eachSideSum = eachSide.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return eachSideSum;
}

function multipleCalc(eachSide) {
  let eachSideMultiple = 1;

  for (let i = 0; i < eachSide.length; i++) {
    eachSideMultiple *= eachSide[i];
  }

  return eachSideMultiple;
}

function eachSideCalc(eachSideNum) {
  const eachSide = makeSplitedArr(eachSideNum);

  const eachSideSum = sumCalc(eachSide);

  const eachSideMultiple = multipleCalc(eachSide);

  const eachSideMax = Math.max(eachSideSum, eachSideMultiple);

  return eachSideMax;
}

function pageNumCalc(who) {
  // 왼쪽 페이지 연산
  const leftMax = eachSideCalc(who[0]);

  // 오른쪽 페이지 연산
  const rightMax = eachSideCalc(who[1]);

  // 왼쪽 가장 큰 수와 오른쪽 가장 큰 수 비교
  const finalMax = Math.max(leftMax, rightMax);

  return finalMax;
}

function exceptionCheck(who) {
  // 페이지가 1 - 400 사이의 값이 아닌 경우.
  if (who[0] < 1 || who[0] > 400 || who[1] < 1 || who[1] > 400) {
    return true;
  }

  // 페이지가 연속적이지 않은 경우.
  // 왼쪽이 오른쪽보다 작으므로 오른쪽 - 왼쪽 === 1 이어야 올바른 페이지이다.
  if (who[1] - who[0] !== 1) {
    return true;
  }

  // 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수이므로
  // [1,2], [399,400]이 시작과 끝 면이다.
  if ((who[0] === 1 && who[1] === 2) || (who[0] === 399 && who[1] === 400)) {
    return true;
  }

  return false;
}

function whoIsWinner(pobi, crong) {
  if (pobi > crong) {
    return 1;
  }

  if (pobi < crong) {
    return 2;
  }

  if (pobi === crong) {
    return 0;
  }
}

function problem1(pobi, crong) {
  // 한 명의 입력이라도 예외 상황이라면 -1 반환
  if (exceptionCheck(pobi) || exceptionCheck(crong)) {
    return -1;
  }

  const pobiMax = pageNumCalc(pobi);
  const crongMax = pageNumCalc(crong);

  const ans = whoIsWinner(pobiMax, crongMax);

  return ans;
}

module.exports = problem1;
