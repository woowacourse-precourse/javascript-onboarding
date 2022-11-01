function problem3(number) {
  const KEY_NUMBERS = [3, 6, 9];

  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const digitsArray = i.toString().split('').map((digit) => parseInt(digit));
    const keyNumbersCount = digitsArray.filter((digit) => KEY_NUMBERS.includes(digit)).length;
    answer += keyNumbersCount;
  }

  return answer;
}

module.exports = problem3;
