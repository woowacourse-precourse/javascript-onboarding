function problem3(number) {
  let count = 0;
  for (let i = 2; i <= number; i++) {
    if (num % 10 === 3 || num % 10 === 6 || num % 10 === 9) {
      count++;
    }
  }

  return count;
}

module.exports = problem3;
