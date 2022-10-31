function problem4(word) {}

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
