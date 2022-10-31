/*
기능 요구 사항

거꾸로 말하기
word는 길이가 1 이상 1,000 이하인 문자열이다.
알파벳 외의 문자는 변환하지 않는다.
알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환한다.

기능 목록

소문자면 소문자로 거꾸로 만들기
대문자면 대문자로 거꾸로 만들기
알파벳이 아닌 문자는 그대로 넣기

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

function problem4(word) {
  var answer = [];
  for (var i = 0; i < word.length; i++) {
    if ("a" <= word[i] && word[i] <= "z") {
      answer.push(
        String.fromCharCode(
          "z".charCodeAt() + ("a".charCodeAt() - word[i].charCodeAt())
        )
      );
    } else if ("A" <= word[i] && word[i] <= "Z") {
      answer.push(
        String.fromCharCode(
          "Z".charCodeAt() + ("A".charCodeAt() - word[i].charCodeAt())
        )
      );
    } else {
      answer.push(word[i]);
    }
  }

  return answer.join("");
}

module.exports = problem4;
