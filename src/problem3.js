const isToClap = (digit) => digit === 3 || digit === 6 || digit === 9;

function getClapCount(number) {
  let digits = number;
  let count = 0;

  while (digits > 0) {
    const digit = digits % 10;

    if (isToClap(digit)) {
      count += 1;
    }

    digits = parseInt(digits / 10);
  }

  return count;
}

function problem3(number) {
  let answer = 0;
  let currentNumber = 1;

  while (currentNumber < number + 1) {
    answer += getClapCount(currentNumber);
    currentNumber += 1;
  }

  return answer;
}

module.exports = problem3;
