function problem1(pobi, crong) {
  const pobiScore = calcMaxNum(pobi);
  const crongScore = calcMaxNum(crong);
  const isDraw = pobiScore === crongScore;
  const winner = pobiScore > crongScore ? 1 : 2;

  if (!isSequentialResult(pobi, crong)) {
    return -1;
  }

  if (isDraw) {
    return 0;
  } else {
    return winner;
  }
}

const adder = (a, c) => a + parseInt(c);

const multiplier = (a, c) => a * parseInt(c);

const reduceDigitsTo = (digits, predicate) =>
  String(digits).split('').reduce(predicate, 1);

const calcMaxNum = ([num1, num2]) => {
  const addedSum1 = reduceDigitsTo(num1, adder);
  const addedSum2 = reduceDigitsTo(num2, adder);
  const multipliedSum1 = reduceDigitsTo(num1, multiplier);
  const multipliedSum2 = reduceDigitsTo(num2, multiplier);
  return Math.max(addedSum1, addedSum2, multipliedSum1, multipliedSum2);
};

const isSequentialResult = (result1, result2) =>
  result1[0] + 1 === result1[1] && result2[0] + 1 === result2[1];

module.exports = problem1;
