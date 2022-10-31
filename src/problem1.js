const isWrongData = book => {
  const [leftPage, rightPage] = book;

  if (leftPage < 1 || leftPage > 400 || leftPage % 2 === 0 || leftPage + 1 !== rightPage)
    return true;
  else
    return false;
}

const getMaxScoreUsingPage = page => {
  const pageDigit = page.toString().split('').map(x => parseInt(x));
  const sumOfDigit = pageDigit.reduce((x, y) => x + y)
  const multiplyOfDigit = pageDigit.reduce((x, y) => x * y);

  const maxScore = Math.max(sumOfDigit, multiplyOfDigit);
  return maxScore;
}

const problem1 = (pobi, crong) => {
  if (isWrongData(pobi) || isWrongData(crong))
    return -1;

  const pobiScore = Math.max(getMaxScoreUsingPage(pobi[0]), getMaxScoreUsingPage(pobi[1]));
  const crongScore = Math.max(getMaxScoreUsingPage(crong[0]), getMaxScoreUsingPage(crong[1]));

  if (pobiScore > crongScore)
    return 1;
  else if (pobiScore < crongScore)
    return 2;
  else
    return 0;
}

module.exports = problem1;