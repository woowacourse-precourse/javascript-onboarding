function problem1(pobi, crong) {
  var answer;

  return answer;
}

function sum(num) {
  return num
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
}

function multiply(num) {
  return num
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc * cur, 1);
}

module.exports = problem1;
