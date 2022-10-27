const isToClap = (digit) => digit === '3' || digit === '6' || digit === '9';

function getClapNumber(number) {
  const digits = number.toString().split('');
  const clapNumbers = digits.filter((digit) => isToClap(digit));

  return clapNumbers.length;
}

function problem3(number) {
  let answer = 0;
  let currentNumber = 1;

  while (currentNumber < number + 1) {
    answer += getClapNumber(currentNumber);
    currentNumber += 1;
  }

  return answer;
}

module.exports = problem3;
