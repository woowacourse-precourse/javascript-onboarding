function check(pageNums) {
  let [left, right] = pageNums;

  //필수 조건
  return 1 <= left && left < 400 && left % 2 == 1 && left + 1 == right;
}

function maxNum(pageNums) {
  //pobi와 crong의 최댓값 구하기
  const [left, right] = pageNums;
  const leftNums = left
    .toString()
    .split("")
    .map((v) => Number(v));
  const rightNums = right
    .toString()
    .split("")
    .map((v) => Number(v));

  return Math.max(
    leftNums.reduce((acc, cur) => (acc += cur), 0),
    leftNums.reduce((acc, cur) => (acc *= cur), 1),
    rightNums.reduce((acc, cur) => (acc += cur), 0),
    rightNums.reduce((acc, cur) => (acc *= cur), 1)
  );
}

function problem1(pobi, crong) {
  //예외 상황
  if (!check(pobi) || !check(crong)) {
    return -1;
  }

  //결과 출력
  const pobiMax = maxNum(pobi);
  const crongMax = maxNum(crong);

  if (pobiMax > crongMax) {
    return 1;
  } else if (pobiMax < crongMax) {
    return 2;
  } else {
    return 0;
  }
  
}

module.exports = problem1;
