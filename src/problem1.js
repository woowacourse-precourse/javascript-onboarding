function problem1(pobi, crong) {
  let maxPobiNumber = 0;
  let maxCrongNumber = 0;
  const isPobiWin = () => maxPobiNumber > maxCrongNumber;

  if (!isValidArray(pobi) || !isValidArray(crong)) return -1

  maxPobiNumber = getMaxFromTwoNumber(getMaxFromAddSum(pobi),getMaxFromMultiplySum(pobi));
  maxCrongNumber = getMaxFromTwoNumber(getMaxFromAddSum(crong),getMaxFromMultiplySum(crong));

  if (isResultDraw(maxPobiNumber, maxCrongNumber)) return 0; 
  return isPobiWin() ? 1 : 2; 
}

/**
* 길이가 2인 배열을  넣으면 그 합을 리턴해주는 함수.
* @param {array} arr 입력된 배열
* @returns {number} 덧셈 결과 리턴
*/
const getMaxFromAddSum = arr => {
  const firstNumber = 0;
  const secondNumber = 1;

  const result = arr.map( ele => 
      String(ele).split('').reduce((acc,cur)=>
          acc + parseInt(cur), 0)
);
  return  result[firstNumber] > result[secondNumber] ? result[firstNumber] : result[secondNumber];
}

/**
* 길이가 2인 배열을 넣으면 그 곱을 리턴해주는 함수.
* @param {array} arr 입력된 배열
* @returns {number}곱 결과 리턴
*/
const getMaxFromMultiplySum = arr =>{
  const firstNumber = 0;
  const secondNumber = 1;

  const result = arr.map( ele => 
      String(ele).split('').reduce((acc,cur)=> acc * parseInt(cur), 1)
);
  return  result[firstNumber] > result[secondNumber] ? result[firstNumber] : result[secondNumber];
}

/**
 * 두 숫자를 비교해 큰 숫자를 리턴하는 함수.
 * @param {number} getNumberFromAdd 
 * @param {number} getNumberFromMultiply 
 * @returns {number}
 */
 const getMaxFromTwoNumber = (getNumberFromAdd, getNumberFromMultiply) =>{
  return getNumberFromAdd > getNumberFromMultiply ? getNumberFromAdd : getNumberFromMultiply; 
}

  const isResultDraw = (maxPobiNumber, maxCrongNumber) => maxPobiNumber === maxCrongNumber

/**
 * 받은 배열이 유효한지 확인하는 함수.
 * @param {array} arr 
 * @returns {boolean}
 */
const isValidArray = (arr) => {
  const leftPage = arr[0];
  const rightPage = arr[1];
  const firstPage = 1;
  const finalPage = 400;
  /**
   * left페이지와 right페이지가 1이상 400미만인지 또는 첫장 마지막장이 아닌지 확인하는 함수
   * @returns {boolean}
   */
  const isValidRange = () => {
    const isLeftPageValidRange = () => leftPage < finalPage - 1 && leftPage > firstPage;
    const isRightPageValidRange = () => rightPage < finalPage && rightPage > firstPage + 1;

      if (isLeftPageValidRange() && isRightPageValidRange()) return true;
  }

  /**
   * 왼쪽 페이지가 홀수, 오른쪽 페이지가 짝수 임을 확인하는 함수
   * @returns {boolean}
   */
  const isEvenAndOdd = () =>  leftPage % 2 !== 0 && rightPage % 2 === 0;

  /**
   * 왼쪽페이지와 오른쪽 페이지가 같은 페이지 내에 있는지 확인하는 함수
   * @returns {boolean}
   */
  const isSamePage = () =>  leftPage + 1 === rightPage; 

  if (isValidRange() && isEvenAndOdd() && isSamePage()) return true
  return false
}
module.exports = problem1;
