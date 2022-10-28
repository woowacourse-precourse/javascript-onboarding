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

  if (pobi[1] != pobi[0] + 1) return ERROR;
  else if (crong[1] != crong[0] + 1) return ERROR;

  var answer;
  return answer;
}

module.exports = problem1;
