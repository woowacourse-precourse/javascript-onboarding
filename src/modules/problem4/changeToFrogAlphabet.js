function changeToFrogAlphabet(alphabet, isUpperCase) {
  const alphabetCase = isUpperCase ? "A" : "a";
  return String.fromCharCode(25 - alphabet.charCodeAt(0) + alphabetCase.charCodeAt(0) * 2);
}

module.exports = changeToFrogAlphabet;
