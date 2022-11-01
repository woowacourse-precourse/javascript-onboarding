function isAlphabet(character) {
  const regex = /^[a-z|A-Z]{1}/;

  if (character.length > 1) return false;

  return regex.test(character);
}

function convertToFrogWord(word) {
  return word
    .split("")
    .map((character) => {
      if (!isAlphabet(character)) return character;

      const charCode = character.charCodeAt();
      const convertedCode = charCode > 90 ? 219 - charCode : 155 - charCode;

      return String.fromCharCode(convertedCode);
    })
    .join("");
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
