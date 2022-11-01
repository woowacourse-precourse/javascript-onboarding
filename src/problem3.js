function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let currentNumber = i;
    while (currentNumber > 0) {
      if (
        currentNumber % 10 === 3 ||
        currentNumber % 10 === 6 ||
        currentNumber % 10 === 9
      ) {
        count += 1;
      }
      currentNumber = Math.floor(currentNumber / 10);
    }
  }
  return count;
}

console.log(problem3(10000));

module.exports = problem3;
