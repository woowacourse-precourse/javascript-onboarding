function isUpperCase(ascii) {
  //ascii 코드가 대문자인지 판별하는 함수
  if (ascii >= 65 && ascii <= 90)
    //ascii 코드가 65 이상 90 이하(대문자 알파벳)라면
    return true; //true를 반환한다.
  return false; //대문자 알파벳이 아니라면 false를 반환한다.
}

function chgUpperCase(ascii) {
  //청개구리 사전식 대문자 변환을 위해 ascii 코드를 변환
  return String.fromCharCode(77.5 + (77.5 - ascii));
}

function isLowerCase(ascii) {
  //ascii 코드가 소문자인지 판별하는 함수
  if (ascii >= 97 && ascii <= 122)
    //ascii 코드가 97 이상 122 이하(소문자 알파벳)라면
    return true; //true를 반환한다.
  return false; //소문자 알파벳이 아니라면 false를 반환한다.
}

function chgLowerCase(ascii) {
  //청개구리 사전식 소문자 변환을 위해 ascii 코드를 변환
  return String.fromCharCode(109.5 + (109.5 - ascii));
}

function chgLetters(letters) {
  //청개구리 사전식 변환 실행
  for (let i = 0; i < letters.length; i++) {
    //각 문자마다
    ascii = letters[i].charCodeAt(0); //ascii 코드를 받아서
    if (isUpperCase(ascii)) {
      //알파벳 대문자라면
      letters[i] = chgUpperCase(ascii); //청개구리 사전식 대문자로 변환한다.
    } else if (isLowerCase(ascii)) {
      //알파벳 소문자라면
      letters[i] = chgLowerCase(ascii); //청개구리 사전식 소문자로 변환한다.
    } else {
      continue; //그 외에는 다음 반복문을 수행한다.
    }
  }
}

function problem4(word) {
  var answer;
  let letters = word.split("");
  chgLetters(letters);
  answer = letters.join("");
  return answer;
}

module.exports = problem4;
