function problem3(number) {
  const result = countClapNumber(number);

  return result;
}

function countClapNumber(lastNumber) {
  const FIRST_NUMBER = 1;
  let countClap = 0;

  for (
    let currentNumber = FIRST_NUMBER;
    currentNumber <= lastNumber;
    currentNumber++
  ) {
    let currentString = currentNumber.toString();

    if (
      currentString.includes("3") ||
      currentString.includes("6") ||
      currentString.includes("9")
    ) {
      countClap++;
    }
  }

  return countClap;
}

module.exports = problem3;
