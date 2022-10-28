function problem2(cryptogram) {
  let answer = cryptogram;
  let repeatCheckRegexp =
    /a{2,}|b{2,}|c{2,}|d{2,}|e{2,}|f{2,}|g{2,}|h{2,}|i{2,}|j{2,}|k{2,}|l{2,}|m{2,}|n{2,}|o{2,}|p{2,}|q{2,}|r{2,}|s{2,}|t{2,}|u{2,}|v{2,}|w{2,}|x{2,}|y{2,}|z{2,}/;

  while (checkIsRepeatExist(answer, repeatCheckRegexp)) {
    answer = deleteRepeatLetter(answer, repeatCheckRegexp);
  }

  return answer;
}

function getIsRepeatExist(cryptogram) {
  let isRepeatExist = false;
  for (let i = 1; i < cryptogram.length; i++) {
    if (cryptogram[i - 1] === cryptogram[i]) {
      isRepeatExist = true;
      break;
    }
  }
  return isRepeatExist;
}

function deleteRepeatLetter(cryptogram, regexp) {
  return cryptogram.replace(regexp, "");
}

module.exports = problem2;

// 입력값 : 문자열

// 구현할 기능
// 중복되는 값이 있는지 판별하는 함수
// 중복되는 값 삭제하는 함수

// 구현 방향성
// 중복되는 값이 없을 때까지 반복하는 반복문을 작성한다.
// 중복되는 값을 찾아 모두 삭제한다.
// 반복문을 돌며 이전 알파벳과 다음 알파벳을 확인한다.
// 현재 알파벳과 앞 뒤 두 알파벳이 다를 때 현재 알파벳을 배열에 추가한다.
// 단, 첫번째 알파벳과 마지막 알파벳은 각각 뒤의 알파벳, 앞의 알파벳만을 고려한다.
