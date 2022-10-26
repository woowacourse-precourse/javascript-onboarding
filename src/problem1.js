const problem1 = (pobi, crong) => {
  if (checkException(pobi, crong)) return -1;
}

const checkException = (player1, player2) => {
  return (player1[1] - player1[0] !== 1) || (player2[1] - player2[0] !== 1);
}

module.exports = problem1;
