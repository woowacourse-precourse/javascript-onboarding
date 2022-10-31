function getSum(num) {
  let result = 0;
  for (let letter of num.toString()) {
    result += parseInt(letter);
  }
  return result;
}

function getMul(num) {
  let result = 1;
  for (let letter of num.toString()) {
    result *= parseInt(letter);
  }
  return result;
}

function problem1(pobi, crong) {
  const ERROR = -1;
  const TIE = 0;
  const POBI = 1;
  const CRONG = 2;

  let pobiScoreArr = [];
  let crongScoreArr = [];

  if (pobi[1] != pobi[0] + 1) return ERROR;
  else if (crong[1] != crong[0] + 1) return ERROR;

  for (let idx = 0; idx < 2; idx++) {
    pobiScoreArr.push(Math.max(getSum(pobi[idx]), getMul(pobi[idx])));
  }
  const pobiScore = Math.max(...pobiScoreArr);

  for (let idx = 0; idx < 2; idx++) {
    crongScoreArr.push(Math.max(getSum(crong[idx]), getMul(crong[idx])));
  }
  const crongScore = Math.max(...crongScoreArr);

  if (pobiScore > crongScore) return POBI;
  else if (pobiScore < crongScore) return CRONG;
  else return TIE;
}

module.exports = problem1;
