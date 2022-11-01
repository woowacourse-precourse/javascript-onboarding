function problem3(number) {
  let count = 0;

  for (let i = 0; i <= number; i++) {
    String(i)
      .split('')
      .forEach((num) => {
        if (num === '3' || num === '6' || num === '9') count++;
      });
  }
  return count;
}

module.exports = problem3;
