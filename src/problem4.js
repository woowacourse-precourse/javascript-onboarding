const ASCII_a = "a".charCodeAt(0);
const ASCII_z = "z".charCodeAt(0);
const ASCII_A = "A".charCodeAt(0);
const ASCII_Z = "Z".charCodeAt(0);
function isLowerCase(alphaAscii) {
  return ASCII_a <= alphaAscii && alphaAscii <= ASCII_z;
}
function isUpperCase(alphaAscii) {
  return ASCII_A <= alphaAscii && alphaAscii <= ASCII_Z;
}
function transformAlpha(alpha) {
  let retAlpha = alpha;
  const alphaAscii = alpha.charCodeAt(0);
  if (isLowerCase(alphaAscii)) {
    const retAscii = ASCII_a + ASCII_z - alphaAscii;
    retAlpha = String.fromCharCode(retAscii);
  }
  if (isUpperCase(alphaAscii)) {
    const retAscii = ASCII_A + ASCII_Z - alphaAscii;
    retAlpha = String.fromCharCode(retAscii);
  }
  return retAlpha;
}
function problem4(word) {
  var answer = "";
  for (let alpha of word) {
    answer += transformAlpha(alpha);
  }
  return answer;
}
module.exports = problem4;
