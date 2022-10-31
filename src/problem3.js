function problem3(number) {
  let count = 0;
  for (let num = 1; num <= number; num++) {
    num
      .toString()
      .split("")
      .forEach((x) => {
        if (+x === 3 || +x === 6 || +x === 9) {
          count++;
        }
      });
  }
  return count;
}

module.exports = problem3;
