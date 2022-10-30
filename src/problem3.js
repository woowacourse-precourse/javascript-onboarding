function problem3(number) {
  let count = 0;
  for (let num = 1; num <= number; num++) {
    num
      .toString()
      .split('')
      .forEach((item) => {
        if (+item === 3 || +item === 6 || +item === 9) {
          count++;
        }
      });
  }
  return count;
}

module.exports = problem3;
