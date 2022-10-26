/**
 * Check for valid values
 * @param {Array} pages 
 * @returns {boolean}
 */
function checkValidation(pages) {
  if ((Array.isArray(pages) && pages.length === 2)
      && (Number.isInteger(pages[0]) && Number.isInteger(pages[1]))
      && (pages[0] % 2 === 1 && pages[0] + 1 === pages[1])
      && pages[1] <= 400)
    return true;
  return false;
}

/**
 * 각 자리 숫자를 모두 더한 점수
 * @param {number} num
 * @returns {number} score
 */
function calculateAddScore(num) {
  return num.toString()
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur), 0)
}

/**
 * 각 자리 숫자를 모두 곱한 점수
 * @param {number} num
 * @returns {number} score
 */
 function calculateMulScore(num) {
  return num.toString()
    .split("")
    .reduce((acc, cur) => acc * parseInt(cur), 1)
}

/**
 * 펼친 페이지의 score 계산
 * @param {Array} pages 
 * @returns {boolean}
 */
function calculateTotalScore(pages) {
  return Math.max(
    calculateAddScore(pages[0]),
    calculateMulScore(pages[0]),
    calculateAddScore(pages[1]),
    calculateMulScore(pages[1]),
  );
}

function problem1(pobi, crong) {
  if (!checkValidation(pobi) || !checkValidation(crong))
    return -1;
  const score1 = calculateTotalScore(pobi);
  console.log(score1);
  const score2 = calculateTotalScore(crong);
  console.log(score2);
  return score1 > score2 ? 1 : (score1 < score2 ? 2 : 0);
}

module.exports = problem1;
