// @ts-check

const PAGE = Object.freeze({
  MIN: 1,
  MAX: 400,
});

const RESULT = Object.freeze({
  POBI_WIN: 1,
  CRONG_WIN: 2,
  DRAW: 0,
  EXCEPTION: -1,
});

/**
 * @param {number} left
 * @param {number} right
 * @returns {boolean}
 */
const isValidPage = (left, right) => {
  // 페이지가 유효한 값인지 반환
  return (
    left >= PAGE.MIN &&
    right <= PAGE.MAX &&
    left % 2 === 1 &&
    left + 1 === right
  );
};

/**
 * @param {number} page
 * @returns {number}
 */
const findMax = (page) => {
  // 페이지 각 자리의 숫자를 더하거나 곱한 값 중 가장 큰 수 반환
  return Math.max(
    `${page}`.split("").reduce((acc, cur) => acc + Number(cur), 0),
    `${page}`.split("").reduce((acc, cur) => acc * Number(cur), 1)
  );
};

/**
 * @param {number[]} pobi
 * @param {number[]} crong
 * @returns {number}
 */
function problem1(pobi, crong) {
  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  // 유효하지 않은 경우 예외 처리
  if (!isValidPage(pobiLeft, pobiRight) || !isValidPage(crongLeft, crongRight))
    return RESULT.EXCEPTION;

  // 포비의 최댓값과 크롱의 최댓값
  const pobiMax = Math.max(findMax(pobiLeft), findMax(pobiRight));
  const crongMax = Math.max(findMax(crongLeft), findMax(crongRight));

  // 게임 결과에 따라 값 반환
  if (pobiMax > crongMax) return RESULT.POBI_WIN;
  else if (pobiMax < crongMax) return RESULT.CRONG_WIN;
  else if (pobiMax === crongMax) return RESULT.DRAW;
  else return RESULT.EXCEPTION;
}

console.log(problem1([97, 98], [197, 198])); // 0
console.log(problem1([131, 132], [211, 212])); // 1
console.log(problem1([99, 102], [211, 212])); // -1

module.exports = problem1;
