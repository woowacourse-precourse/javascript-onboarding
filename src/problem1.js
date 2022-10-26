/*
기능목록
1. 숫자의 각자릿수의 합과 곱 중 최댓값 구하기
2. 홀수 짝수의 합,곱의 최댓값 중 최댓값 구하기
3. 포비와 크롱의 최댓값 중 최댓값 구하기
4. 승자 알아내서 알맞은 결과 반환하게 만들기
5. 예외 처리하기
*/

function maxFromNumber(number) {
  let plus = 0;
  let multiple = 1;

  while (number > 0) {
    plus += number % 10;
    multiple *= number % 10;
    number = Math.floor(number / 10);
  }

  return Math.max(plus, multiple);
}

function problem1(pobi, crong) {
  var answer;

  return answer;
}

module.exports = problem1;
