function problem1(pobi, crong) {
  var answer;
  return answer;
}

function isValidPage(numbers) {
  if (numbers.indexOf(1) === -1 || numbers.indexOf(400) === -1) return true;
  return false;
}

function isSequenceNumber(numbers) {
  if (numbers.reduce((acc, cur) => Math.abs(acc - cur), 0) === 1) return true;
  return false;
}

module.exports = problem1;
