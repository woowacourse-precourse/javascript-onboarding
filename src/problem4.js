function isAlpha(asciiNum) {
  if (asciiNum < 65 || (asciiNum > 90 && asciiNum < 97) || asciiNum > 122)
    return 0;
  return 1;
}

function isUpper(asciiNum) {
  if (asciiNum >= 65 && asciiNum <= 90)
    return 1;
  return 0;
}

function caseUpper(asciiNum) {
  let gap = Math.abs(77.5 - asciiNum) * 2;
  if (asciiNum < 77.5)
    return asciiNum + gap;
  return asciiNum - gap;
}

function caseLower(asciiNum) {
  let gap = Math.abs(109.5 - asciiNum) * 2;
  if (asciiNum < 109.5)
    return asciiNum + gap;
  return asciiNum - gap;
}

function convertChar(ch) {
  let asciiNum = ch.charCodeAt(0);
  if (!isAlpha(asciiNum))
    return ch;
  if (isUpper(asciiNum))
    return String.fromCharCode(caseUpper(asciiNum));
  return String.fromCharCode(caseLower(asciiNum));
}

function problem4(word) {
  var answer = '';
  for (const ch of word)
    answer += convertChar(ch);
  return answer;
}

module.exports = problem4;

/* 
구현
1. word각각의 문자를 변환해서 answer에 저장
2. 알파벳 범위인지 확인하는 함수
3. 대문자인지 소문자인지 확인하고 값을 변경하는 함수
  3-a. 대문자 : ascii 대문자의 중간값(= 77.5)과 현재 요소의 ascii값(asciiNum) 차이 * 2 = gap 구하기
    3-a-1. asciiNum 77.5 이하는 gap을 더한 값, 이상은 gap을 뺀 값의 아스키문자 리턴
  3-b. 소문자 : ascii 소문자의 중간값(=109.5)과 현재 요소의 ascii값(asciiNum) 차이 = gap 구하기
    3-b-1. asciiNum 109.5 이하는 gap을 더한 값, 이상은 gap을 뺀 값의 아스키문자 리턴
*/