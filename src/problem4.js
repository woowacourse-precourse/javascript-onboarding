function problem4(word) {
  var answer = "";
  const A_code = charCode("A");
  const Z_code = charCode("Z");
  const a_code = charCode("a");
  const z_code = charCode("z");
  for (let i in word) {
    var char_code = charCode(word[i]);
    if (isAlpha(char_code)) {
      //alphabet인 경우
      if (isDown(char_code)) {
        //소문자인 경우
        char_code = z_code - char_code + a_code;
      } else {
        //대문자인 경우
        char_code = Z_code - char_code + A_code;
      }
    }
    answer += String.fromCharCode(char_code);
  }
  return answer;
}
function charCode(char) {
  return char.charCodeAt(0);
}
function isAlpha(char_code) {
  return (
    (char_code >= charCode("a") && char_code <= charCode("z")) ||
    (char_code >= charCode("A") && char_code <= charCode("Z"))
  );
}
function isDown(char_code) {
  if (char_code >= charCode("a")) return true;
  return false;
}

module.exports = problem4;
