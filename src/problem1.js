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

  let pobi_score_arr = [];
  let crong_score_arr = [];

  if (pobi[1] != pobi[0] + 1) return ERROR;
  else if (crong[1] != crong[0] + 1) return ERROR;

  for (let idx = 0; idx < 2; idx++) {
    pobi_score_arr.push(Math.max(getSum(pobi[idx]), getMul(pobi[idx])));
  }
  const pobi_score = Math.max(...pobi_score_arr);

  for (let idx = 0; idx < 2; idx++) {
    crong_score_arr.push(Math.max(getSum(crong[idx]), getMul(crong[idx])));
  }
  const crong_score = Math.max(...crong_score_arr);

  if (pobi_score > crong_score) return POBI;
  else if (pobi_score < crong_score) return CRONG;
  else return TIE;
}

module.exports = problem1;
