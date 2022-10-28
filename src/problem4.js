const alphabetArray = Array.from({ length: 26 }, (v, i) =>
  String.fromCharCode(i + 65)
);

function findAlphabet(alphabet) {
  let convertedAlphabet =
    alphabetArray[25 - alphabetArray.indexOf(alphabet.toUpperCase())];
  return convertedAlphabet;
}

function convertWords(words) {
  const wordsArray = words.split("");
  let newWord = "";

  wordsArray.map((word) => {
    if (word == " ") {
      newWord += " ";
    } else if (word == word.toLowerCase()) {
      newWord += findAlphabet(word).toLowerCase();
    } else {
      newWord += findAlphabet(word);
    }
  });

  return newWord;
}

function problem4(word) {
  return convertWords(word);
}

module.exports = problem4;
