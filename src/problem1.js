function calNumber(number) {
  const digits = number.toString().split('').map(Number);
  const sumNumbers = digits.reduce((prevNumber, curNumber) => prevNumber + curNumber);
  const mulNumbers = digits.reduce((prevNumber, curNumber) => prevNumber * curNumber);

  return Math.max(sumNumbers, mulNumbers);
}

function problem1(pobi, crong) {
  const wrongPage = pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1];

  if (wrongPage) return -1;
  const pobiHighestNumber = Math.max(calNumber(pobi[0]), calNumber(pobi[1]));
  const crongHighestNumber = Math.max(calNumber(crong[0]), calNumber(crong[1]));
  const answer = pobiHighestNumber > crongHighestNumber ? 1 : 0;
  return answer;
}

module.exports = problem1;
