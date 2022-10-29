function isUpperCase(ascii) {
  //ascii 코드가 대문자인지 판별하는 함수
  if (ascii >= 65 && ascii <= 90)
    //ascii 코드가 65 이상 90 이하(대문자 알파벳이라면)라면
    return true; //true를 반환한다.
  return false; //대문자 알파벳이 아니라면 false를 반환한다.
}

function isLowerCase(ascii) {
  //ascii 코드가 소문자인지 판별하는 함수
  if (ascii >= 97 && ascii <= 122)
    //ascii 코드가 97 이상 122 이하(소문자 알파벳)라면
    return true; //true를 반환한다.
  return false; //소문자 알파벳이 아니라면 false를 반환한다.
}

function problem4(word) {
  var answer;
  let letters = word.split("");
  return answer;
}

module.exports = problem4;
