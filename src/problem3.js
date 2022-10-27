function problem3(number) {
  let count = 0;
  for (let i = 3; i <= number; i++) {
    String(i)
      .split("")
      .map(Number)
      .forEach((el) => {
        el !== 0 && el % 3 === 0 ? count++ : null;
      });
  }
  return count;
}

module.exports = problem3;
