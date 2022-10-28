// 게임과 관련된 상수 및 인덱스
const rule = {
  firstPage: 1,
  lastPage: 400,
  leftPage: 0,
  rightPage: 1,
  pobi: 0,
  crong: 1,
  pobiWin: 1,
  crongWin: 2,
  draw: 0,
  exception: -1,
};

/**
 * @param {number[]} arr 페이지수를 구하고자 하는 사람의 배열 (ex. pobi 또는 crong)
 * @param {number[]} maxArr 페이지의 최대값이 저장되는 배열
 * @param {number} maxIdx pobi의 경우 rule.pobi, crong의 경우 rule.crong이다.
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
  // 예외 상황 :: 포비 또는 크롱이 첫 페이지를 펼쳤을 때
  if (
    pobi[rule.leftPage] === rule.firstPage ||
    crong[rule.leftPage] === rule.firstPage
  ) {
    return rule.exception;
  }

  // 예외 상황 :: 포비 또는 크롱이 마지막 페이지를 펼쳤을 때
  if (
    pobi[rule.rightPage] === rule.lastPage ||
    crong[rule.rightPage] === rule.lastPage
  ) {
    return rule.exception;
  }

  // 예외상황 :: 왼쪽페이지 번호와 오른쪽 페이지 번호가 형식에 맞지 않을 떄
  if (
    pobi[rule.leftPage] + 1 !== pobi[rule.rightPage] ||
    crong[rule.leftPage] + 1 !== crong[rule.rightPage]
  ) {
    return rule.exception;
  }

  const max = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  // 본인의 왼쪽 페이지 혹은 오른쪽 페이지의 각 자리 숫자 합과 곱의 최대를 구한다.
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
