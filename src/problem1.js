const RESULT_STATUS = Object.freeze({
  EXCEPTION: -1,
  DRAW: 0,
  POBI_WIN: 1,
  CRONG_WIN: 2,
});

/** 각 자리수 분리 */
const splitNumber = (number = 0) => {
  return `${number}`.split('').map(Number);
};
/** 숫자들의 합 계산 */
const addNumbers = (numbers = []) => {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};
/** 숫자들의 곱 계산 */
const multiplyNumbers = (numbers = []) => {
  return numbers.reduce((acc, cur) => acc * cur, 1);
};
/** 계산된 값 중 가장 큰 숫자 반환 */
const compareNumbers = (...number) => {
  return Math.max(...number);
};

/** 파라미터 조건 확인 */
const isInvalidPage = (page = []) => {
  const [left, right] = page;

  if (left % 2 !== 1) return true;
  if (right % 2 !== 0) return true;

  if (left <= 1 || left >= 400) return true;
  if (right <= 1 || right >= 400) return true;

  // 페이지 형식
  if (page.length > 2) return true;

  // 연속된 페이지
  if (left + 1 !== right) return true;
  return false;
};

function problem1(pobi, crong) {
  const maxNumbers = [];
  const opponents = [pobi, crong];
  if (opponents.some(isInvalidPage)) {
    return RESULT_STATUS.EXCEPTION;
  }

  for (const [left, right] of opponents) {
    const splitLeft = splitNumber(left);
    const splitRight = splitNumber(right);

    const addRight = addNumbers(splitRight);
    const multiplyLeft = multiplyNumbers(splitLeft);
    const multiplyRight = multiplyNumbers(splitRight);

    maxNumbers.push(compareNumbers(addRight, multiplyLeft, multiplyRight));
  }

  const [maxPobi, maxCrong] = maxNumbers;

  if (maxPobi > maxCrong) {
    return RESULT_STATUS.POBI_WIN;
  } else if (maxPobi < maxCrong) {
    return RESULT_STATUS.CRONG_WIN;
  } else {
    return RESULT_STATUS.DRAW;
  }
}

module.exports = problem1;
