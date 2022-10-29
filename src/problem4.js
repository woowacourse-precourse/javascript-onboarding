function transformAlpha(alpha) {
  let retAlpha = alpha;
  const alphaAscii = alpha.charCodeAt(0);
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
  var answer;
  return answer;
}
module.exports = problem4;
