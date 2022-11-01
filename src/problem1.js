// @ts-check

/**
 * @param {number} left
 * @param {number} right
 * @returns {boolean}
 */
const isValidPage = (left, right) => {
  // 페이지가 유효한 값인지 반환
  return left >= 1 && right <= 400 && left % 2 === 1 && left + 1 === right;
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
    return -1;

  // 포비의 최댓값과 크롱의 최댓값
  const pobiMax = Math.max(findMax(pobiLeft), findMax(pobiRight));
  const crongMax = Math.max(findMax(crongLeft), findMax(crongRight));

  // 게임 결과에 따라 값 반환
  if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else if (pobiMax === crongMax) return 0;
  else return -1;
}

console.log(problem1([97, 98], [197, 198])); // 0
console.log(problem1([131, 132], [211, 212])); // 1
console.log(problem1([99, 102], [211, 212])); // -1

module.exports = problem1;
