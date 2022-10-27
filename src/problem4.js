const alphabetArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function convertWord(words) {
  let wordsArray = words.split("");
  let newWord = "";

  wordsArray.map((word) => {
    if (word == " ") {
      newWord += " ";
    } else if (word == word.toLowerCase()) {
      newWord +=
        alphabetArray[
          25 - alphabetArray.indexOf(word.toUpperCase())
        ].toLowerCase();
    } else {
      newWord += alphabetArray[25 - alphabetArray.indexOf(word)];
    }
  });
  return newWord;
}

module.exports = problem4;
