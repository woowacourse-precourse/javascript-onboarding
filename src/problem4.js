function lowerFrog(letterCode) {
  const mid = "m".charCodeAt(0);
  return 2 * mid - letterCode + 1;
}

function upperFrog(letterCode) {
  const mid = "M".charCodeAt(0);
  return 2 * mid - letterCode + 1;
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
