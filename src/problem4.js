const checkLowerCase = (char) => {
  return char === char.toLowerCase();
};

const getReverseChar = (char) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const index = alphabet.indexOf(char);
  return alphabet[alphabet.length - 1 - index];
};

function problem4(word) {
  const wordArray = word.split("");
  const regex = /[a-z|A-Z]/;
  for (let i = 0; i < wordArray.length; i++) {
    if (!regex.test(wordArray[i])) continue;
    if (checkLowerCase(wordArray[i])) {
      wordArray[i] = getReverseChar(wordArray[i]);
    } else {
      wordArray[i] = getReverseChar(wordArray[i].toLowerCase()).toUpperCase();
    }
  }
  return wordArray.join("");
}

module.exports = problem4;
