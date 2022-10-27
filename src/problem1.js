function calNumber(number) {
  const digits = number.toString().split('').map(Number);
  const sumNumbers = digits.reduce((prevNumber, curNumber) => prevNumber + curNumber);
  const mulNumbers = digits.reduce((prevNumber, curNumber) => prevNumber * curNumber);

  return Math.max(sumNumbers, mulNumbers);
}

function problem1(pobi, crong) {
  return answer;
}

module.exports = problem1;
