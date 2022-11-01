function problem1(pobi, crong) {
  let score = [0, 0];
  if (
    Number.isInteger(pobi[0]) == false ||
    Number.isInteger(pobi[1]) == false ||
    Number.isInteger(crong[0]) == false ||
    Number.isInteger(crong[1]) == false
  ) {
    return -1;
  }
  if (pobi[0] >= pobi[1] || crong[0] >= crong[1]) {
    return -1;
  }
  if (pobi[0] % 2 == 0 || crong[0] % 2 == 0) {
    return -1;
  }
  if (pobi[1] % 2 != 0 || crong[1] % 2 != 0) {
    return -1;
  }
  if (pobi[0] <= 1 || crong[0] <= 1 || pobi[1] <= 1 || crong[1] <= 1) {
    return -1;
  }
  if (pobi[0] >= 400 || crong[0] >= 400 || pobi[1] >= 400 || crong[1] >= 400) {
    return -1;
  }
  if (pobi[1] - 1 != pobi[0] || crong[1] - 1 != crong[0]) {
    return -1;
  }
  score[0] = caculateScore(pobi);
  score[1] = caculateScore(crong);
  if (score[0] > score[1]) {
    return 1;
  }
  if (score[0] < score[1]) {
    return 2;
  }
  if (score[0] == score[1]) {
    return 0;
  }
  return -1;
}
function caculateScore(playerPages) {
  let maxScore;
  let leftPageNumber = [];
  let rightPageNumber = [];
  leftPageNumber = playerPages[0]
    .toString()
    .split('')
    .map((x) => parseInt(x));
  rightPageNumber = playerPages[1]
    .toString()
    .split('')
    .map((x) => parseInt(x));

  maxScore = Math.max(
    leftPageNumber.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    ),
    leftPageNumber.reduce(
      (previousValue, currentValue) => previousValue * currentValue,
      1
    ),
    rightPageNumber.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    ),
    rightPageNumber.reduce(
      (previousValue, currentValue) => previousValue * currentValue,
      1
    )
  );
  return maxScore;
}
module.exports = problem1;
