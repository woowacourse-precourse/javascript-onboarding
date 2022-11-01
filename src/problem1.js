function problem1(pobi, crong) {
  let answer;
  if (handleException(pobi) === -1 || handleException(crong) === -1) {
    answer = -1;
    return answer;
  }

  answer = checkWinner(pobi, crong);
  return answer;
}

const sumOrMultiply = (pageNumber) => {
  const pageString = pageNumber + "";
  let sumScore = 0;
  let multiplyScore = 1;

  for (let i = 0; i < pageString.length; i++) {
    sumScore += +pageString[i];
    multiplyScore *= +pageString[i];
  }

  return Math.max(sumScore, multiplyScore);
};

const pageMaxScore = (pageArr) => {
  const firstPageScore = sumOrMultiply(pageArr[0]);
  const secondPageScore = sumOrMultiply(pageArr[1]);

  return Math.max(firstPageScore, secondPageScore);
};

const checkWinner = (pobiArr, crongArr) => {
  const pobiScore = pageMaxScore(pobiArr);
  const crongScore = pageMaxScore(crongArr);

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  if (pobiScore === crongScore) return 0;
};

const handleException = (pageArr) => {
  const firstPage = pageArr[0];
  const secondPage = pageArr[1];

  if (firstPage === 1) return -1;
  if (secondPage === 400) return -1;
  if (secondPage !== firstPage + 1) return -1;

  return 1;
};

module.exports = problem1;
