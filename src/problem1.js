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


  // 계산을 위한 코드들 

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
    return pages.map(
      page =>
        page.toString()
          .split('')
          .map(num =>
            +num));
  }
  /**
   * 
   * @param {number} a 
   * @param {number} b 
   * @returns {number} sum
   */
  function add(a, b) { return a + b; }
  /**
   * 
   * @param {number} a 
   * @param {number} b 
   * @returns {number} mul
   */
  function multiply(a, b) { return a * b; }



}
module.exports = problem1;
