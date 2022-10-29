function problem1(pobi, crong) {
  var answer;
  return answer;
}

const sumNumbers = (pageNumber) => {
  const pageString = pageNumber + "";
  let score = 0;

  for (let i = 0; i < pageString.length; i++) {
    score += +pageString[i];
  }

  return score;
};

const multiplyNumbers = (pageNumber) => {
  const pageString = pageNumber + "";
  let score = 0;

  for (let i = 0; i < pageString.length; i++) {
    score *= +pageString[i];
  }

  return score;
};

module.exports = problem1;
