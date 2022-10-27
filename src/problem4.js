function problem4(word) {
  let str = [...word];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      str[i] = reverseLetter(str[i]);
    }
  }
  return str.join("");
}

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
