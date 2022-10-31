function problem4(word) {
  return word
    .split("")
    .map((char) => (isAlphabet(char) ? convertAlpha(char) : char))
    .join("");
}

function isLowerCase(char) {
  return char.toUpperCase() !== char;
}

function convertAlpha(char) {
  const average = ("A".charCodeAt(0) + "Z".charCodeAt(0)) / 2;

  let converted = String.fromCharCode(
    average - (char.toUpperCase().charCodeAt(0) - average)
  );
  return isLowerCase(char) ? converted.toLowerCase() : converted;
}

function isAlphabet(char) {
  return /[a-zA-Z]/.test(char);
}

module.exports = problem4;
