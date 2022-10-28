function problem3(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 10 === 3 || i % 10 === 6 || i % 10 === 9) {
      count += 1;
    }
  }

  return count;
}

module.exports = problem3;
