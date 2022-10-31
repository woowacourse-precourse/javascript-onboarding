/*
  기능구현 목록
  1. 짝 횟수를 카운팅할 변수 answer
  2. 1~number 의 범위에서 짝을 확인하기 위한 변수 num
  3. 만약 짝이 나올 경우 answer에 +1를 카운팅 후 num에 나누기 10 을 하여 자릿수를 줄인 다음 다시 탐색 하였을 때 0인 경우 탐색을 멈춤
  4. 멈춘 answer의 값을 출력함.
*/

function problem3(number) {
  let answer = 0;
  let num = 0;
  for (let i = 1; i <= number; i++) {
    num = i;
    while (num !== 0) {
      if (num % 10 === 3 || num % 10 === 6 || num % 10 === 9) {
        answer++;
        num = Math.floor(num / 10);
      }
      else {
        num = Math.floor(num / 10);
      }
    }
  }
  return answer;
}

module.exports = problem3;
