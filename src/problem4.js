/*
기능 구현 목록
[v] 문자를 유니코드로 변환하는 기능
[v] 문자가 소문자인지 판별하는 기능
[v] 문자가 대문자인지 판별하는 기능
[ ] 대문자 알파벳 변환 기능
[ ] 소문자 알파벳 변환 기능
*/

function problem4(word) {
  let answer = '';
  for (const char of word) {
    console.log(convertUnicode(char));
  }
  return answer;
}

function convertUnicode(char) {
  return char.charCodeAt();
}

function isLower(unicodeChar) {
  const LOWER_CASE_START_POINT = 97;
  const LOWER_CASE_END_POINT = 122;
  return LOWER_CASE_START_POINT <= unicodeChar && unicodeChar <= LOWER_CASE_END_POINT
    ? true
    : false;
}

function isUpper(unicodeChar) {
  const UPPER_CASE_START_POINT = 65;
  const UPPER_CASE_END_POINT = 90;
  return UPPER_CASE_START_POINT <= unicodeChar && unicodeChar <= UPPER_CASE_END_POINT
    ? true
    : false;
}

problem4('I love you'); // 'R olev blf'
problem4('Hello Everyone!'); // 'Svool Veviblmv!'
problem4('Grrr... Wang!'); // 'Tiii... Dzmt!'
module.exports = problem4;
