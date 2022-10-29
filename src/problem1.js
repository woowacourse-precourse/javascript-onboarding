function problem1(pobi, crong) {
  var answer;
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

module.exports = problem1;
