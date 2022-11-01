function problem1(pobi, crong) {
  // 예외 사항이 true일때, -1을 반환
  if (breakTheRules(pobi) || breakTheRules(crong)) {
    return -1;
  }

  let [pobiLargeNum, crongLargeNum] = [getLargeNum(pobi), getLargeNum(crong)];
  let result = getWinner(pobiLargeNum, crongLargeNum);
  return result;
}

/* 왼쪽, 오른쪽 페이지 숫자를 받아, 각 자리 숫자를 곱하거나 더했을 때,  
가장 큰 숫자를 반환하는 함수 */
function getLargeNum(arr) {
  const sumCallback = (accumulator, current) => {
    return accumulator + current;
  };

  const multiCallback = (accumulator, current) => {
    return accumulator * current;
  };

  let [leftPage, rightPage] = [
    arr[0].toString().split("").map(Number),
    arr[1].toString().split("").map(Number),
  ];

  let max = Math.max(
    leftPage.reduce(sumCallback),
    leftPage.reduce(multiCallback),
    rightPage.reduce(sumCallback),
    rightPage.reduce(multiCallback)
  );
  return max;
}

// pobi와 crong의 가장 큰 값의 조건을 검사하여, 게임의 결과값을 반환하는 함수
function getWinner(pobiNum, crongNum) {
  if (crongNum < pobiNum) {
    return 1;
  } else if (pobiNum < crongNum) {
    return 2;
  } else if (pobiNum === crongNum) {
    return 0;
  }
}

// 시작 면, 마지막 면이 나오거나, 페이지 번호가 올바르지 않을 때 true를 반환하는 함수
function breakTheRules(num) {
  if (num[0] === 1 || num[0] === 399 || num[0] + 1 !== num[1]) {
    return true;
  } else {
    return false;
  }
}

module.exports = problem1;
