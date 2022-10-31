function problem4(word) {
  var answer = "";
  const A_code = "A".charCodeAt(0);
  const Z_code = "Z".charCodeAt(0);
  const a_code = "a".charCodeAt(0);
  const z_code = "z".charCodeAt(0);
  for (let i in word) {
    var char_code = word[i].charCodeAt(0);
    if (
      (char_code >= a_code && char_code <= z_code) ||
      (char_code >= A_code && char_code <= Z_code)
    ) {
      //alphabet인 경우
      if (char_code >= a_code) {
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
module.exports = problem4;
