const UPPER_ALPHABET = /^[A-Z]/;
const LOWER_ALPHABET = /^[a-z]/;

const ASCII_UPPER_A = 65;
const ASCII_UPPER_Z = 90;
const ASCII_LOWER_A = 97;
const ASCII_LOWER_Z = 122;

const reverseUpper = (letter) => {
  return String.fromCharCode(ASCII_UPPER_A + (ASCII_UPPER_Z - letter.charCodeAt(0)));
};

const reverseLower = (letter) => {
  return String.fromCharCode(ASCII_LOWER_A + (ASCII_LOWER_Z - letter.charCodeAt(0)));
};

function problem4(word) {
  const answer = [];

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (UPPER_ALPHABET.test(letter)) answer.push(reverseUpper(letter));
    else if (LOWER_ALPHABET.test(letter)) answer.push(reverseLower(letter));
    else answer.push(letter);
  }

  return answer.join("");
}

/*
// for test
const words = ["I love you", "This is me being REASONABLE."];
for (word of words) {
  console.log(problem4(word));
}
*/

module.exports = problem4;
