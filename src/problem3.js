/*
기능 요구 사항

3, 6, 9가 들어가는 개수만큼 손뼉치기
총 몇번치는지 반환

기능 목록

숫자를 입력하면 자릿수에 3,6,9가 몇개 있는지 확인
1부터 해당 수까지 3,6,9가 몇개 있었는지 확인

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

function check3(a) {
  var cnt = 0;
  while (a > 0) {
    if (a % 10 == 3 || a % 10 == 6 || a % 10 == 9) {
      cnt++;
    }
    a = parseInt(a / 10);
  }
  return cnt;
}

function problem3(number) {
  var answer = 0;
  for (var i = 1; i <= number; i++) {
    answer += check3(i);
  }
  return answer;
}

module.exports = problem3;
