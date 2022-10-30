function problem3(number) {
  let count = 0;

  Array.from({ length: number }, (_, i) => String(i + 1)).forEach((v) => {
    [...v].forEach((digit) => /[369]/g.test(digit) && (count += 1));
  });

  return count;
}

module.exports = problem3;
