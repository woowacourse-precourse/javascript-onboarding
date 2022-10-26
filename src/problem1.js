/**
 *
 * @param {number[]} arr 페이지수를 구하고자 하는 사람의 배열 (ex. pobi 또는 crong)
 * @param {number[]} maxArr 페이지의 최대값이 저장되는 배열
 * @param {number} maxIdx pobi의 경우 0, crong의 경우 1이다.
 */
function getMax(arr, maxArr, maxIdx) {
  arr.map((v) => {
    const tmpArr = v
      .toString()
      .split('')
      .map((x) => parseInt(x));

    const tmpSum = tmpArr.reduce((p, c) => p + c);
    const tmpMultiple = tmpArr.reduce((p, c) => p * c);
    maxArr[maxIdx] = Math.max(maxArr[maxIdx], tmpSum, tmpMultiple);
  });
}

function problem1(pobi, crong) {
  // 예외상황 :: 왼쪽페이지 번호와 오른쪽 페이지 번호가 형식에 맞지 않을 떄
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) {
    return -1;
  }

  const max = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  getMax(pobi, max, 0);
  getMax(crong, max, 1);

  // 포비 승
  if (max[0] > max[1]) return 1;
  // 크롱 승
  else if (max[0] < max[1]) return 2;
  // 무승부
  else return 0;
}

module.exports = problem1;
