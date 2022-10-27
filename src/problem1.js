/*
  구현할 기능 목록
  [O] 왼쪽 페이지 번호와 오른쪽 페이지 번호가 연속된 숫자인지 확인하는 기능 | return 값 : true/false | 함수명 : isConsecutiveNumbers    
  [ ] 페이지 번호의 각 자리 숫자를 모두 더하는 기능 | return 값 : 각 자리 숫자의 합 
  [ ] 페이지 번호의 각 자리 숫자를 모두 곱하는 기능 | return 값 : 각 자리 숫자의 곱
  [ ] 인자로 주어진 값 중 가장 큰 수를 구하는 기능 | return 값 : 가장 큰 수
  [ ] 점수를 비교해 게임의 결과를 return 하는 기능 | return 값 : 0(무승부)/1(포비 승)/2(크롱 승) 
*/

function problem1(pobi, crong) {
  if (!(isConsecutiveNumbers(pobi) && isConsecutiveNumbers(crong))) return -1;
}

function isConsecutiveNumbers(numbers) {
  return numbers[0] + 1 == numbers[1];
}

module.exports = problem1;
