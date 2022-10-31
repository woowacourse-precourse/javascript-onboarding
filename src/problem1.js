const checkException = (array) => {
  return +array[0] % 2 === 0 || +array[1] - +array[0] !== 1;
};

const getPreprocessedData = (data) => {
  return [
    ("" + data[0]).split("").map((v) => +v),
    ("" + data[1]).split("").map((v) => +v),
  ];
};

const getMaxScore = (array) => {
  return Math.max(
    array.reduce((acc, cur) => acc + cur, 0),
    array.reduce((acc, cur) => acc * cur, 1)
  );
};

function problem1(pobi, crong) {
  if (checkException(pobi)) return -1;
  if (checkException(crong)) return -1;

  const [pobiLeft, pobiRight] = getPreprocessedData(pobi);
  const [crongLeft, crongRight] = getPreprocessedData(crong);

  const pobiScore = Math.max(getMaxScore(pobiLeft), getMaxScore(pobiRight));
  const crongScore = Math.max(getMaxScore(crongLeft), getMaxScore(crongRight));

  if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;
  else return 0;
}

module.exports = problem1;
