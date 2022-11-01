function problem4(word) {
  const alphabet = [
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
  let wordArray = [...word];

  for (let i = 0; i < wordArray.length; i++) {
    if (alphabet.includes(wordArray[i].toUpperCase())) {
      wordArray[i] = reverseLetter(alphabet, wordArray[i]);
    }
  }

  return wordArray.join("");
}

function reverseLetter(strArray, letter) {
  for (let i = 0; i < strArray.length; i++) {
    if (letter.toUpperCase() === strArray[i]) {
      if (letter.toUpperCase() === letter) {
        return strArray.reverse()[i];
      } else {
        return strArray.reverse()[i].toLowerCase();
      }
    }
  }
}

module.exports = problem4;
