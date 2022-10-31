function problem4(word) {}

const getOrderAlphabet = () => {
  const orderAlphabetArr = [];

  for (let i = 65; i <= 90; i++) {
    orderAlphabetArr.push(String.fromCharCode(i));
    orderAlphabetArr.push(String.fromCharCode(i).toLowerCase());
  }

  return orderAlphabetArr;
};

module.exports = problem4;
