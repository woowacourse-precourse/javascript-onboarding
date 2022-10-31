function changeSmall(alpha) {
  const alphaAscii = alpha.charCodeAt(0);
  const changeChar = 219 - alphaAscii;
  String.fromCharCode(changeChar);
  return String.fromCharCode(changeChar);
}

function changeBig(alpha) {
  const alphaAscii = alpha.charCodeAt(0);
  const changeChar = 155 - alphaAscii;
  String.fromCharCode(changeChar);
  return String.fromCharCode(changeChar);
}

function checkAlpha(alpha) {
  if (alpha >= "a" && alpha <= "z") {
    return changeSmall(alpha);
  } else if (alpha >= "A" && alpha <= "Z") {
    return (letter = changeBig(alpha));
  }
  return alpha;
}

function problem4(word) {
  let str = [];
  for (let i = 0; i < word.length; i++) {
    str += checkAlpha(word[i]);
  }
  return str;
}

module.exports = problem4;
