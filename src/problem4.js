function problem4(word) {
  const alphabet = [
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
  const bigAlphabet = alphabet.map((x) => x.toUpperCase());
  let reverseAlphabet = [];
  for (let i = alphabet.length - 1; 0 <= i; i--) {
    reverseAlphabet.push(alphabet[i]);
  }
  const bigReverseAlphabet = reverseAlphabet.map((x) => x.toUpperCase());

  let greenfrog = "";

  const array = word.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== " " && array[i] === array[i].toUpperCase()) {
      greenfrog += bigReverseAlphabet[bigAlphabet.indexOf(array[i])];
    } else if (array[i] !== " " && array[i] === array[i].toLowerCase()) {
      greenfrog += reverseAlphabet[alphabet.indexOf(array[i])];
    } else if (array[i] === " ") {
      greenfrog += " ";
    } else greenfrog += array[i];
  }
  return greenfrog;
}
module.exports = problem4;
