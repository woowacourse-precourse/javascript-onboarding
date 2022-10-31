/*
  ### 기능 목록

  1. 전달받은 단어를 배열로 변환한다.(String to Array)
  2. 각 알파벳을 아스키코드로 변환하여, 대문자와 소문자를 구별한다.
  [ ASCII CODE - 'A'=65, 'Z'=90 / 'a'=97, 'z'=122] 
  3. [ 65 + 90 =155 / 97 + 122 = 219 ] <- 이를 고려하여, 반대되는 알파벳을 찾는다.
  4. 이후 배열을 문자열로 변환한다, (Array to String)
*/
function problem4(word) {
  const Array = word.split("");
  let Chung_Array = Array.map((e) => {
    if (e.charCodeAt() >= 65 && e.charCodeAt() <= 90) {
      return String.fromCharCode(155 - e.charCodeAt());
    } else if (e.charCodeAt() >= 97 && e.charCodeAt() <= 122) {
      return String.fromCharCode(219 - e.charCodeAt());
    } else return e;
  });
  answer = Chung_Array.join("");
  return answer;
}

module.exports = problem4;
