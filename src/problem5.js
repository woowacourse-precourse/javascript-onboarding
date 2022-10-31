/*
기능 요구 사항

5만원부터 해서 큰 금액을 우선으로해서 돈을 출금하기

기능 목록

금액 배열 만들기
큰 금액부터 나누고 몫을 저장하기
나머지 금액으로 금액 초기화하기

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

const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i < 9; i++) {
    if (money <= 0) break;
    var cnt = parseInt(money / arr[i]);
    answer[i] = cnt;
    money = parseInt(money % arr[i]);
  }
  return answer;
}

module.exports = problem5;
