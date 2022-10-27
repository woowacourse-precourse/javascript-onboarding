/**
 * 포비와 크롱 승자구하기
 *
 * @param {number[]} pobi
 * @param {number[]} crong
 * @returns {number} winner
 */
function problem1(pobi, crong) {
  const RESULT = {
    DRAW: 0,
    POBI: 1,
    CRONG: 2,
    ERROR: -1,
  }

  if (!isValid([pobi, crong], [isOddEven, isDiff(1), isArea(1, 400)])) return RESULT.ERROR;

  /** main logic */
  let pobiPoints = getPoints(pobi);
  let crongPoints = getPoints(crong);

  if (pobiPoints === crongPoints) return RESULT.DRAW;
  if (pobiPoints > crongPoints) return RESULT.POBI;
  else return RESULT.CRONG;


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

  /**
   * 주어진 수를 자릿수 배열로 만드는 함수
   * @param {number} pages 
   * @returns {number[]} seat of digits
   * @example numberToDigits(123) => [1, 2, 3]
   */
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


  /**
   * 주언 배열이 유효한 지 검사한다. 
   * @param {Array<number[]>} users 
   * @param {Array<(...)=>(a,b)=> boolean>} errorCase 
   * @returns 
   */
  function isValid(users, errorCase) {
    for (const user of users) {
      for (fn of errorCase) {
        if (fn(...user) === false) return false;
      }
    }
    return true;
  }

  /**
     * @param {number} a
     * @param {number} b
     * @return {boolean} validation
     */
  function isOddEven(a, b) {
    if (a % 2 === 1 && a % 2 === 0) return true;
    else false;
  }

  function isDiff(diff) {
    return function (a, b) {
      if (b - a === diff) return true;
      else return false;
    }
  }

  function isArea(min, max) {
    return function (start, end) {
      if (start >= min && end <= max) return true;
      console.log(min, start, end, max);
      return false;
    }
  }
}
module.exports = problem1;
