/*
기능 요구 사항

연속하는 중복 문자 제거하기

cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
cryptogram은 알파벳 소문자로만 이루어져 있다.

기능 목록
연속하는 중복이 있는지 확인하기
중복이 있다면 없어질때까지 제거하기

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

function checkOverlap(str) {
  for (var i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1]) return 1;
  }
}

function deleteOverlap(cryptogram) {
  var str = cryptogram;

  while (checkOverlap(str)) {
    var str2 = [];
    if (str[0] != str[1]) str2.push(str[0]);
    for (var i = 1; i < str.length - 1; i++) {
      if (str[i - 1] != str[i] && str[i] != str[i + 1]) {
        str2.push(str[i]);
      }
    }
    if (str[str.length - 1] != str[str.length - 2]) {
      str2.push(str[str.length - 1]);
    }
    str = str2;
  }
  return str;
}

function problem2(cryptogram) {
  var answer = deleteOverlap(cryptogram);
  answer = answer.join("");

  return answer;
}

module.exports = problem2;
