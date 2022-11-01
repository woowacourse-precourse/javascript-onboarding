/* 
 * Features
 * 1. 1 ~ 입력값 만큼 반복문 실행
 * 2. [3, 6 ,9] 의 숫자가 들어가는지 검사하여 count
 * 3. 두자릿수부터 개별적으로 세야함 e.g. 36 => cnt+=2 
 *  
 * Exceptions
 * 1. 1 ~ 10000 이하의 자연수
 */

const isOutOfRange = num => !(num >= 1 && num <= 10000)

function problem3(number) {
  let answer = 0;
  let turn;
  let targets = [3, 6, 9]
  if (isOutOfRange(number) || !Number.isInteger(number)) {
    throw 'Input range error'
  }
  
  for (turn = 1; turn <= number; turn++) {
    String(turn).split("").map((digit) => {
      if(targets.includes(Number(digit))) answer += 1
    })
  }
  
  return answer;
}

module.exports = problem3;


