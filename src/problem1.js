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

function getMaxNumber(numbers) {
  let max = 0;
  numbers.forEach((number) => {
    const numberArr = number.toString().split("");
    const plus = numberArr.reduce((acc, cur) => acc + parseInt(cur), 0);
    const multi = numberArr.reduce((acc, cur) => acc * parseInt(cur), 1);
    max = Math.max(max, plus, multi);
  });
  return max;
}

module.exports = problem1;
