/**
 * 포비와 크롱 승자구하기
 *
 * @param {number[]} pobi
 * @param {number[]} crong
 * @returns {number} winner
 */
function problem1(pobi, crong) {


  /** main logic */
  let pobiPoints = getPoints(pobi);
  let crongPoints = getPoints(crong);

  if (pobiPoints === crongPoints) return 0;
  if (pobiPoints > crongPoints) return 1;
  else return 2;

  /**
   * - 유저 포인트 계산
   * @param {[Number, Number]} numbers 
   * @return {number} points
   */
  function getPoints(numbers) {
    let possibleCases = numberToDigits(numbers)
      .map((digitsOfPage) => [digitsOfPage.reduce(add), digitsOfPage.reduce(multiply)])
      .flat();

    return Math.max(...possibleCases)
  }

  function numberToDigits(pages) {
    return [[1, 3], [1, 4]]
  }




}
module.exports = problem1;
