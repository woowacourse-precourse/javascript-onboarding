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

module.exports = problem1;
