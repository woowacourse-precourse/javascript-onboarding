const getMaxScore = ([left, right]) => {
  const leftList = spreadNumberToNumberArray(left);
  const rightList = spreadNumberToNumberArray(right);

  return Math.max(
    getTotalAdd(leftList),
    getTotalAdd(rightList),
    getTotalMulti(leftList),
    getTotalMulti(rightList),
  );
};

const getTotalAdd = (array) => {
  return array.reduce((acc, cur) => acc + cur, 0);
};

const getTotalMulti = (array) => {
  return array.reduce((acc, cur) => acc * cur, 1);
};

const spreadNumberToNumberArray = (number) => {
  return (number + "").split("").map((char) => Number(char));
};

const checkPage = ([left, right]) => {
  if (left + 1 !== right) return false;
  else if (right >= 400 || left <= 1) return false;
  else if (left % 2 === 0 || right % 2 === 1) return false;

  return true;
};

function problem1(pobi, crong) {
  if (!checkPage(pobi) || !checkPage(crong)) return -1;

  const pobiScore = getMaxScore(pobi);
  const crongScore = getMaxScore(crong);
  if (pobiScore === crongScore) return 0;
  else if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;

  return;
}

module.exports = problem1;
