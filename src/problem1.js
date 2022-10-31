// @ts-check

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
  // 유효하지 않은 경우 예외 처리
  if (
    pobi[0] === 1 ||
    crong[1] === 400 ||
    pobi[0] % 2 !== 1 ||
    crong[0] % 2 !== 1 ||
    pobi[0] + 1 !== pobi[1] ||
    crong[0] + 1 !== crong[1]
  )
    return -1;

  // 포비의 최댓값과 크롱의 최댓값
  const pobiMax = Math.max(findMax(pobi[0]), findMax(pobi[1]));
  const crongMax = Math.max(findMax(crong[0]), findMax(crong[1]));

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
