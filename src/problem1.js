function problem1(pobi, crong) {
  var answer;
  const pobiMAX = calcPageNum(pobi);
  const crongMAX = calcPageNum(crong);

  if (crongMAX === -1 || pobiMAX === -1) {
    answer = -1;
  } else if (crongMAX > pobiMAX) {
    answer = 2;
  } else if (crongMAX === pobiMAX) {
    answer = 0;
  } else if (pobiMAX > crongMAX) {
    answer = 1;
  }
  return answer;
}
function calcPageNum(arr) {
  let maxNum = -1;
  if (arr[0] + 1 !== arr[1]) {
    return -1;
  }

  for (let page of arr) {
    let sum = 0;
    let mul = 1;
    do {
      sum += page % 10;
      mul *= page % 10;
      page = Math.floor(page / 10);
    } while (page > 0);
    maxNum = Math.max(maxNum, sum > mul ? sum : mul);

    return maxNum;
  }
}

module.exports = problem1;
