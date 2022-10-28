function problem3(number) {
  let clapCount = 0;

  for (let i = 3; i <= number; i += 1) {
    let currentNumber = i;

    while (currentNumber > 0) {
      if (currentNumber % 10 === 3 || currentNumber % 10 === 6 || currentNumber % 10 === 9) {
        clapCount += 1;
      }

      currentNumber = Math.floor(currentNumber / 10);
    }
  }

  return clapCount;
}

module.exports = problem3;
