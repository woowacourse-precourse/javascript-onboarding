function getOpposite(letter) {
  const ascNum = letter.charCodeAt();

  // 대문자일 경우 A와 Z의 아스키 코드를 더한 값에서 현재 문자의 아스키 코드 빼기
  if (ascNum >= 65 && ascNum <= 90) {
    return String.fromCharCode(155 - ascNum);
  }

  // 소문자일 경우 a와 z의 아스키 코드를 더한 값에서 현재 문자의 아스키 코드 빼기
  if (ascNum >= 97 && ascNum <= 122) {
    return String.fromCharCode(219 - ascNum);
  }

  // 알파벳이 아닌 경우 변환하지 않는다.
  return letter;
}

function problem4(word) {
  let answer = '';
  return answer;
}

module.exports = problem4;
