/**
 * @param {number[]} arr 페이지수를 구하고자 하는 사람의 배열 (ex. pobi 또는 crong)
 * @param {number[]} maxArr 페이지의 최대값이 저장되는 배열
 * @param {number} maxIdx pobi의 경우 0, crong의 경우 1이다.
 */

const rule = {
  leftPage: 0,
  rightPage: 1,
  pobi: 0,
  crong: 1,
  pobiWin: 1,
  crongWin: 2,
  draw: 0,
  exception: -1,
};

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
  if (
    pobi[rule.leftPage] + 1 !== pobi[rule.rightPage] ||
    crong[rule.leftPage] + 1 !== crong[rule.rightPage]
  ) {
    return rule.exception;
  }

  const max = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  getMax(pobi, max, rule.pobi);
  getMax(crong, max, rule.crong);

  // 포비 승
  if (max[rule.pobi] > max[rule.crong]) return rule.pobiWin;
  // 크롱 승
  if (max[rule.pobi] < max[rule.crong]) return rule.crongWin;
  // 무승부
  if (max[rule.pobi] === max[rule.crong]) return rule.draw;
}

module.exports = problem1;
