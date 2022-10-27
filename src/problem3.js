function problem3(number) {
  const result = countClapAll(number);

  return result;
}

function countClapAll(lastNumber) {
  const FIRST_NUMBER = 1;
  let countAll = 0;

  for (
    let currentNumber = FIRST_NUMBER;
    currentNumber <= lastNumber;
    currentNumber++
  ) {
    countAll += countClapNumber(currentNumber);
  }

  return countAll;
}

function countClapNumber(number) {
  let countClap = 0;
  let currentString = number.toString();

  for (
    let currentStringIndex = 0;
    currentStringIndex < currentString.length;
    currentStringIndex++
  ) {
    const singleNumber = currentString[currentStringIndex];

    if (
      singleNumber.includes("3") ||
      singleNumber.includes("6") ||
      singleNumber.includes("9")
    ) {
      countClap++;
    }
  }

  return countClap;
}

module.exports = problem3;
