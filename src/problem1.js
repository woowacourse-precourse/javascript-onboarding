function problem1(pobi, crong) {
  var answer;

  const maxNumOfPobi = getMaxNumInPages(pobi);
  const maxNumOfCrong = getMaxNumInPages(crong);

  if (maxNumOfPobi === -1 || maxNumOfCrong === -1) return -1;

  if (maxNumOfPobi === maxNumOfCrong) {
    answer = 0;
  } else if (maxNumOfPobi > maxNumOfCrong) {
    answer = 1;
  } else {
    answer = 2;
  }

  return answer;
}

// 왼쪽, 오른쪽 페이지 중 더 큰 값 return
function getMaxNumInPages([left, right]) {
  if (left > 0 && right < 401 && left % 2 && right === left + 1) {
    const leftResult = getMaxNumByCalculating(left);
    const rightResult = getMaxNumByCalculating(right);

    return leftResult > rightResult ? leftResult : rightResult;
  }

  return -1;
}

// 더하기, 곱하기 중 더 큰 값 return
function getMaxNumByCalculating(num) {
  const sum = String(num)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  const multi = String(num)
    .split("")
    .reduce((acc, cur) => acc * Number(cur), 1);

  return sum > multi ? sum : multi;
}

module.exports = problem1;
