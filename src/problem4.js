function problem4(word) {
  const wordArr = word.split("");
  const convertedWordArr = wordArr.map((alphabet) => convertAlphabet(alphabet));
  return convertedWordArr.join("");
}

function convertAlphabet(alphabet) {
  if (!alphabet.match(/[A-Za-z]/)) return alphabet;
  const isUpper = alphabet.toUpperCase() === alphabet;
  const greenFrogCode = isUpper
    ? "Z".charCodeAt() + "A".charCodeAt() - alphabet.charCodeAt()
    : "z".charCodeAt() + "a".charCodeAt() - alphabet.charCodeAt();
  return String.fromCharCode(greenFrogCode);
}

module.exports = problem4;
