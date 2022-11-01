function problem4(word) {
  return word
    .split("")
    .map((letter) => letter.replace(letter, getReverseLetter(letter)))
    .join("");
}

const ASCII_CODE = Object.freeze({
  A_UPPER: 65,
  Z_UPPER: 90,
})

const getReverseLetter = (letter) => {
  if (letter === " ") return letter;

  const orderAlphabet = getOrderAlphabet();
  const reverseOrderAlphabet = getReverseOrderAlphabet();

  return reverseOrderAlphabet[orderAlphabet.indexOf(letter)];
};

const getOrderAlphabet = () => {
  const orderAlphabetArr = [];

  for (let index = ASCII_CODE.A_UPPER; index <= ASCII_CODE.Z_UPPER; index++) {
    orderAlphabetArr.push(String.fromCharCode(index));
    orderAlphabetArr.push(String.fromCharCode(index).toLowerCase());
  }

  return orderAlphabetArr;
};

const getReverseOrderAlphabet = () => {
  const reverseOrderAlphabetArr = [];

  for (let index = ASCII_CODE.Z_UPPER; index >= ASCII_CODE.A_UPPER; index--) {
    reverseOrderAlphabetArr.push(String.fromCharCode(index));
    reverseOrderAlphabetArr.push(String.fromCharCode(index).toLowerCase());
  }

  return reverseOrderAlphabetArr;
};

module.exports = problem4;
