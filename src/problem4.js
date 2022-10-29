/*
기능 구현 목록
- [v] 문자를 유니코드로 변환하는 기능
- [v] 문자가 소문자인지 판별하는 기능
- [v] 문자가 대문자인지 판별하는 기능
- [v] 사전 역순 대문자 알파벳 변환 기능
- [ ] 사전 역순 소문자 알파벳 변환 기능
*/

function problem4(word) {
  let answer = '';
  for (const char of word) {
    if (isUpper(convertUnicode(char))) {
      answer += convertUpperToReverseDictionary(convertUnicode(char));
    } else if (isLower(convertUnicode(char))) {
      console.log('소문자 처리중');
    } else {
      answer += char;
    }
  }
  return answer;
}

function convertUnicode(char) {
  return char.charCodeAt();
}

function isLower(unicodeChar, START_POINT = 97, END_POINT = 122) {
  return START_POINT <= unicodeChar && unicodeChar <= END_POINT ? true : false;
}

function isUpper(unicodeChar, START_POINT = 65, END_POINT = 90) {
  return START_POINT <= unicodeChar && unicodeChar <= END_POINT ? true : false;
}

function convertUpperToReverseDictionary(unicodeChar, START_POINT = 65, END_POINT = 90) {
  return String.fromCharCode(END_POINT - unicodeChar + START_POINT);
}

problem4('I love you'); // 'R olev blf'
problem4('Hello Everyone!'); // 'Svool Veviblmv!'
problem4('Grrr... Wang!'); // 'Tiii... Dzmt!'
module.exports = problem4;
