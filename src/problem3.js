function problem3(number) {
  const result = countClapAll(number);
  const checkedError = checkError(number);

  if (checkedError !== "Not Error") {
    return checkedError;
  }

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

function checkError(lastNumber) {
  const MINIMUN_NUMBER = 1;
  const MAXIMUM_NUMBER = 10000;

  if (Number.isInteger(lastNumber) === false) {
    return "자연수만 입력할 수 있습니다.";
  }

  if (lastNumber < MINIMUN_NUMBER || lastNumber > MAXIMUM_NUMBER) {
    return "1 이상 10,000 이하만 입력할 수 있습니다.";
  }

  return "Not Error";
}

module.exports = problem3;
