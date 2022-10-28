/*
 * 기능 분석
 * [x] 3부터 number까지 있는 모든 숫자들을 확인하는 반복문 작성
 * [x] 숫자에서 3,6,9의 존재를 확인하는 정규표현식 작성
 * [x] 정규표현식을 활용하여 숫자에서의 3,6,9 존재여부확인 기능
 * [] 숫자에서 3,6,9의 갯수를 파악하고 더하는 기능 
 */

// number에서 3,6,9를 확인하는 정규표현식
const NUMBER_REG_EXP = /(3|6|9)/g;

// number에서의 정규표현식 내에 존재하는지 확인하는 함수
const isDetectNumber = (number) => NUMBER_REG_EXP.test(String(number)); 

function problem3(number) {
  var answer;
  /*
   * 반복문을 3부터 돌리는 이유는 1과 2에서 3이 존재하지 않아
   * 검사하는 의미가 없기 때문에 3부터 검사한다.
   */
  for (let i = 3; i <= number; i++) {
    if (isDetectNumber(i)) {
      
    }
  }

  return answer;
}

module.exports = problem3;
