function alphabetGather() {
  const upperWord = [
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
  const lowerWord = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return [lowerWord, upperWord];
}

function wordToArray(word) {
  let wordArrays = word.split("");

  return wordArrays;
}

function checkLowerCase(alphabet) {
  if (alphabet !== " " && alphabet.toLowerCase() === alphabet) {
    return true;
  }
}

function checkUpperCase(alphabet) {
  if (alphabet !== " " && alphabet.toUpperCase() === alphabet) {
    return true;
  }
}
