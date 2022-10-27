function problem4(word) {}

function reverseLetter(letter) {
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

  for (let i = 0; i < 26; i++) {
    if (letter.toUpperCase() == alphabet[i]) {
      if (letter.toUpperCase() == letter) {
        return alphabet.reverse()[i];
      } else {
        return alphabet.reverse()[i].toLowerCase();
      }
    }
  }
}

module.exports = problem4;
