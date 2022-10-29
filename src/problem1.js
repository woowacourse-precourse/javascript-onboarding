function problem1(pobi, crong) {

  // 예외사항 체크
  const isValidPobi = isValidInput(pobi);
  const isValidCrong = isValidInput(crong);
  
  if(!(isValidPobi && isValidCrong)) return -1;

  /**
   * 예외사항 체크 함수
   * - input 의 길이가 2가 아닌 경우
   * - 시작 면 또는 마지막 면이 포함된 경우
   * - [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 [홀수, 짝수]가 아닌 경우
   * - [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있지 않은 경우
   * @param {number[]} input [왼쪽 페이지 번호, 오른쪽 페이지 번호]
   * @returns {boolean} 예외사항에 해당되면 false 반환
   */
  function isValidInput(input){
    if (
      input.length !== 2 | 
      input[1] === 0 | 
      input[0] === 399 | 
      input[0]%2 !== 1 | 
      input[1]%2 !== 0 | 
      Math.abs(input[1] - input[0]) !== 1
      ) return false;
    return true;
  };

};

module.exports = problem1;
