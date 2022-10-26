function getOpposite(letterCode, mid) {
  if (letterCode <= mid) {
    return letterCode + (mid - letterCode) * 2 + 1;
  }
  return letterCode - (letterCode - mid) * 2 + 1;
}

function lowerFrog(letterCode) {
  const mid = "m".charCodeAt(0);
  return getOpposite(letterCode, mid);
}

function upperFrog(letterCode) {
  const mid = "M".charCodeAt(0);
  return getOpposite(letterCode, mid);
}

function problem4(word) {
  const result = word
    .replace(/[a-z]/g, (letter) =>
      String.fromCharCode(lowerFrog(letter.charCodeAt(0)))
    )
    .replace(/[A-Z]/g, (letter) =>
      String.fromCharCode(upperFrog(letter.charCodeAt(0)))
    );
  return result;
}

module.exports = problem4;
