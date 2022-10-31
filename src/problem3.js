function countClaps(number) {
  let clapCount = 0;

  for (let i = 3; i <= number; i += 1) {
    let currentNumber = i;

    while (currentNumber > 0) {
      if (currentNumber % 10 === 3 || currentNumber % 10 === 6 || currentNumber % 10 === 0) {
        clapCount += 1;
      }

      currentNumber = Math.floor(currentNumber / 10);
    }
  }

  return clapCount; 
}

function problem3(number) {
  const totalClaps = countClaps(number);

  return totalClaps;
}

module.exports = problem3;
