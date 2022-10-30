const UPPER_ALPHABET = /^[A-Z]/;
const LOWER_ALPHABET = /^[a-z]/;

const ASCII_UPPER_A = 65;
const ASCII_UPPER_Z = 90;
const ASCII_LOWER_A = 97;
const ASCII_LOWER_Z = 122;

const reverseUpper = (letter) => {
  return String.fromCharCode(ASCII_UPPER_A + (ASCII_UPPER_Z - letter.charCodeAt()));
};

const reverseLower = (letter) => {
  return String.fromCharCode(ASCII_LOWER_A + (ASCII_LOWER_Z - letter.charCodeAt()));
};

const reverseAlphabet = (letter) => {
  if (UPPER_ALPHABET.test(letter)) return reverseUpper(letter);
  else if (LOWER_ALPHABET.test(letter)) return reverseLower(letter);
  else return letter;
};

function problem4(word) {
  return word
    .split("")
    .map((letter) => reverseAlphabet(letter))
    .join("");
}

/*
// for test
const words = ["I love you", "This is me being REASONABLE."];
for (word of words) {
  console.log(problem4(word));
}
*/

module.exports = problem4;
