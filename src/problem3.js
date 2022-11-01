function problem3(number) {
  let answer = 0;
  /**
   * 3 또는 6 또는 9 인지 검사하는 함수.
   * @param {number} digit 
   * @returns {boolean}
   */
  const isThreeSixNine = (digit) =>{
    return digit === '3' || digit === '6' || digit === '9';
  }
  /**
   * 0부터 받은 인자 까지의 수가 담긴 배열
   */
  const makeArrFromZeroToNumber = [...Array(number + 1).keys()];
  
  makeArrFromZeroToNumber.forEach(
    (num) =>  [...String(num)].forEach(
      (digit) => {
        if (isThreeSixNine(digit))
         answer ++;
      }
    )
  );

  return answer;
  
}
module.exports = problem3;

