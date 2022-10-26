/**
 * Check for valid values
 * @param {Array} pages 
 * @returns {boolean}
 */
function checkValidation(pages) {
  if (pages.length === 2 
      && (Number.isInteger(pages[0]) && Number.isInteger(pages[1]))
      && (pages[0] % 2 === 1 && pages[0] + 1 === pages[1])
      && pages[1] <= 400)
    return true;
  return false;
}


function calculateTotalScore() {
  //펼친 페이지의 score 계산
}

function problem1(pobi, crong) {
  if (!checkValidation(pobi) || !checkValidation(crong))
    return -1;
  const score1 = calculateTotalScore(pobi);
  const score2 = calculateTotalScore(crong);
  return score1 > score2 ? 1 : (score1 < score2 ? 2 : 0);
}

module.exports = problem1;
