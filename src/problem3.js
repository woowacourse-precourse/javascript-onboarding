function problem3(number) {
  
  // 제한 사항 만족하는지 체크
  // - number는 1 이상 10,000 이하인 자연수이다.
  if (number < 1 || number > 10000) return false;
  if (!(/^[0-9]+$/.test(number))) return false;
  
  /**
   * 1 부터 number 까지 자연수 중 3,6,9 숫자가 나오는 횟수를 세는 기능
   * @param {number} number 
   * @returns 1부터 number 까지 3,6,9 개수 
   */
  function checkThreeSixNine(number){
    // 1 부터 number 까지 숫자를 배열에 저장
    let arr = [];
    for (let i = 1; i <= number; i++ ){
      arr.push(i);
    };
    // 1 부터 number 까지 3,6,9 개수 체크
    const num = arr.join('');
    const regex = /[3,6,9]/g;
    const numThreeSixNine = num.match(regex).length;

    return numThreeSixNine;
  }

  return checkThreeSixNine(number);
}

module.exports = problem3;
