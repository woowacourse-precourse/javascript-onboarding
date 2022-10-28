function check(pageNums) {
  const [left, right] = pageNums;

  return 1 <= left && left < 400 && left % 2 == 1 && left + 1 == right;
}

function getMax(pageNums) {
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
  if (!check(pobi) || !check(crong)) return -1;

  let answer = 0;
  const pobiMax = getMax(pobi);
  const crongMax = getMax(crong);

  if (pobiMax > crongMax) {
    answer = 1;
  } else if (pobiMax < crongMax) {
    answer = 2;
  }

  return answer;
}

module.exports = problem1;
