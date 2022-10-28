function problem1(pobi, crong) {
  if (!isValidArray(pobi) || !isValidArray(crong)) return -1

  let maxPobiNumber = 0;
  let maxCrongNumber = 0;

  maxPobiNumber = getMaxFromTwoNumber(getMaxFromAddSum(pobi),getMaxFromMultiplySum(pobi));
  maxCrongNumber = getMaxFromTwoNumber(getMaxFromAddSum(crong),getMaxFromMultiplySum(crong));

}

/**
* 길이가 2인 배열을  넣으면 그 합을 리턴해주는 함수.
* @param {array} arr 입력된 배열
* @returns {number} 덧셈 결과 리턴
*/
const getMaxFromAddSum = arr => {
  const result = arr.map( ele => 
      String(ele).split('').reduce((acc,cur)=>
          acc + parseInt(cur), 0)
);
  return  result[0] > result[1] ? result[0] : result[1];
}

/**
* 길이가 2인 배열을 넣으면 그 곱을 리턴해주는 함수.
* @param {array} arr 입력된 배열
* @returns {number}곱 결과 리턴
*/
const getMaxFromMultiplySum = (arr) =>{
  const result = arr.map( ele => 
      String(ele).split('').reduce((acc,cur)=> acc * parseInt(cur), 1)
);
  return  result[0] > result[1] ? result[0] : result[1];
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
  
  const isValidRange = () => {
      if (leftPage < finalPage - 1 && leftPage > firstPage) return true;
      if (rightPage < finalPage && rightPage > firstPage + 1) return true;
  }
  const isEvenAndOdd = () =>  leftPage % 2 !== 0 && rightPage % 2 === 0;
  const isSamePage = () =>  leftPage + 1 === rightPage; 
  if (isValidRange() && isEvenAndOdd() && isSamePage()) return true
  return false
}

module.exports = problem1;
