function problem4(word) {
  return word
    .split("")
    .map((letter) => letter.replace(letter, getReverseLetter(letter)))
    .join("");
}

const getReverseLetter = (letter) => {
  if (letter === " ") return letter;

  const orderAlphabet = getOrderAlphabet();
  const reverseOrderAlphabet = getReverseOrderAlphabet();

  return reverseOrderAlphabet[orderAlphabet.indexOf(letter)];
};

const getOrderAlphabet = () => {
  const orderAlphabetArr = [];

  for (let i = 65; i <= 90; i++) {
    orderAlphabetArr.push(String.fromCharCode(i));
    orderAlphabetArr.push(String.fromCharCode(i).toLowerCase());
  }

  return orderAlphabetArr;
};

const getReverseOrderAlphabet = () => {
  const reverseOrderAlphabetArr = [];

  for (let i = 90; i >= 65; i--) {
    reverseOrderAlphabetArr.push(String.fromCharCode(i));
    reverseOrderAlphabetArr.push(String.fromCharCode(i).toLowerCase());
  }

  return reverseOrderAlphabetArr;
};

module.exports = problem4;
