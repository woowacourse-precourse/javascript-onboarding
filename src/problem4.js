function transformAlpha(english) {
  let retAlpha = english;
  const alphaAscii = english.charCodeAt(0);
  const aAscii = "a".charCodeAt(0);
  const zAscii = "z".charCodeAt(0);
  const AAscii = "A".charCodeAt(0);
  const ZAscii = "Z".charCodeAt(0);
  if (aAscii <= alphaAscii && alphaAscii <= zAscii) {
    const retAscii = aAscii + zAscii - alphaAscii;
    retAlpha = String.fromCharCode(retAscii);
  } else if (AAscii <= alphaAscii && alphaAscii <= ZAscii) {
    const retAscii = AAscii + ZAscii - alphaAscii;
    retAlpha = String.fromCharCode(retAscii);
  }
  return retAlpha;
}
function problem4(word) {
  let answer = "";
  for (let english of word) {
    answer += transformAlpha(english);
  }
  return answer;
}

module.exports = problem4;