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

function compareMaxBySumAndMultiply(person) {
  const [left, right] = person;
  return Math.max(sum(left), sum(right), multiply(left), multiply(right));
}

function problem1(pobi, crong) {
  var answer;

  return answer;
}

module.exports = problem1;
