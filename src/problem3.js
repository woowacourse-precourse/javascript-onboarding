function problem3(number) {
  let answer = 0;
  /**
   * 3 또는 6 또는 9 인지 검사하는 함수.
   * @param {number} digit 
   * @returns {boolean}
   */
  const isThreeSixNine = (digit) =>{
    return digit === '3' || digit === '6' || digit === '9'
  }

  [...Array(number + 1).keys()].forEach(
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

