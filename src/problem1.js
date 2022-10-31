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
 * @author 허민
 * @param {number[]} arr 페이지수를 구하고자 하는 사람의 배열 (ex. pobi 또는 crong)
 * @param {number[]} maxArr 페이지의 최대값이 저장되는 배열
 * @param {number} maxIdx pobi의 경우 rule.pobi, crong의 경우 rule.crong이다.
 */
const getMax = (arr, maxArr, maxIdx) => {
  arr.map((v) => {
    const tmpArr = v
      .toString()
      .split('')
      .map((x) => parseInt(x));

    const tmpSum = tmpArr.reduce((p, c) => p + c);
    const tmpMultiple = tmpArr.reduce((p, c) => p * c);
    maxArr[maxIdx] = Math.max(maxArr[maxIdx], tmpSum, tmpMultiple);
  });
};

/**
 * @param {number[]} pobi - 포비의 페이지가 담긴 배열
 * @param {number[]} crong - 크롱의 페이지가 담긴 배열
 * @returns {boolean} 요구하는 제한사항에 걸려 올바르지 못한 결과를 낼 수 있는 경우 해당 함수는 true를 반환하며, 문제가 없을 경우 false를 반환한다.
 */
const exceptionChecker = (pobi, crong) => {
  // 제한사항 :: 왼쪽페이지 번호와 오른쪽 페이지 번호가 형식에 맞지 않을 떄
  if (
    pobi[rule.leftPage] + 1 !== pobi[rule.rightPage] ||
    crong[rule.leftPage] + 1 !== crong[rule.rightPage]
  ) {
    return true;
  }
};

function problem1(pobi, crong) {
  if (exceptionChecker(pobi, crong)) return rule.exception;

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
