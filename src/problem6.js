/*
기능 요구 사항

크루들의 닉네임 중 같은 글자가 연속적으로 포함되는 경우 제한하고
해당 크루 이메일 알려주기

두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복으로 간주
이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만
신청할 수 있는 이메일은 email.com 도메인으로만 제한
result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거

기능 목록

forms의 길이만큼 순회하기
하나씩 닉네임을 뽑아 2~최대개수만큼 substring 만들기
substring을 들고 다른 크루들의 이메일과 비교하기
포함하고 있다면 추가하기
중복 제거하기
오름차순으로 정렬하기

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

function problem6(forms) {
  var point = [];
  //forms 훑기
  for (var i = 0; i < forms.length; i++) {
    //forms에서 i번째 닉네임의 substring 뽑기
    for (var j = 0; j < forms[i][1].length - 1; j++) {
      for (var k = j + 2; k < forms[i][1].length; k++) {
        // substring을 포함하고 있는게 있는지 확인하기
        for (var l = i + 1; l < forms.length; l++) {
          if (forms[l][1].includes(forms[i][1].substring(j, k))) {
            point.push(forms[l][0]);
            point.push(forms[i][0]);
          }
        }
      }
    }
  }
  var set = new Set(point);
  const answer = Array.from(set);
  return answer;
}

module.exports = problem6;
