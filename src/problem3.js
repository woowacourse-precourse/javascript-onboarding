/* 
 * Features
 * 1. 1 ~ 입력값 만큼 반복문 실행
 * 2. [3, 6 ,9] 의 숫자가 들어가는지 검사하여 count
 * 3. 두자릿수부터 개별적으로 세야함 e.g. 36 => cnt+=2 
 * 4. 횟수 리턴
 *  
 * Exceptions
 * 1. 1 ~ 10000 이하의 자연수
 */

// 정수를 digit 단위로 쪼개서 배열로 반횐
const getNumToDigitArr = num => String(num).split("")

function problem3(number) {
  var answer = 0;
  var i;
  var targets = [3, 6, 9]

  for (i = 1; i <= number; i++) {
    getNumToDigitArr(i).map((digit) => {
      if(targets.includes(Number(digit))) answer += 1
    })
  }
  return answer;
}

module.exports = problem3;


