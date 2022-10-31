/*
기능 요구 사항

왼쪽 오른쪽 번호의 각자리 숫자를 더하거나 곱해 가장 큰수가 점수
점수가 크면 승리
시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.
포비 승 = 1, 크롱 승 = 2, 예외사항 = -1.
pobi와 crong의 길이는 2이다.
pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있다.

기능 목록
수를 입력하면 자릿수를 모두 더하는 기능
수를 입력하면 자릿수를 모두 곱하는 기능
왼쪽 오른쪽을 비교하여 큰 수를 반환하는 기능

예외사항
연속된 페이지가 아니거나 왼쪽페이지가 홀수가 아닌 경우

프로그래밍 요구사항
Node.js 14 버전에서 실행 가능해야 한다.
순수 Vanilla JS로만 구현한다.
프로그램 종료 시 process.exit()를 호출하지 않는다.
프로그램 구현이 완료되면 ApplicationTest의 모든 테스트가 성공해야 한다.
프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

과제 진행 요구사항
미션은 javascript-onboarding 저장소를 Fork & Clone해 시작한다.
과제 진행 및 제출 방법은 프리코스 과제 제출 문서를 참고한다.
*/

function calPlus(a) {
  var sum = 0;
  while (a > 0) {
    sum = sum + (a % 10);
    a = parseInt(a / 10);
  }
  return sum;
}
function calMultiply(a) {
  var mul = 1;
  while (a > 0) {
    mul = mul * (a % 10);
    a = parseInt(a / 10);
  }
  return mul;
}

function choiceBiggest(a, b) {
  var left_big = calPlus(a) > calMultiply(a) ? calPlus(a) : calMultiply(a);
  var right_big = calPlus(b) > calMultiply(b) ? calPlus(b) : calMultiply(b);
  return left_big > right_big ? left_big : right_big;
}

function problem1(pobi, crong) {
  if (pobi[0] % 2 == 0 || crong[0] % 2 == 0) return -1;
  if (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1]) return -1;

  let pobiBig = choiceBiggest(pobi[0], pobi[1]);
  let crongBig = choiceBiggest(crong[0], crong[1]);

  if (pobiBig > crongBig) return 1;
  else if (pobiBig == crongBig) return 0;
  else if (pobiBig < crongBig) return 2;
}

module.exports = problem1;
