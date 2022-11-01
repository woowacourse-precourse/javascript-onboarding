function problem3(number) {
  let count = 0;
  let degit;
  for (let i = 3; i <= number; i += 1) {
    for (let j = i; j > 0; j = Math.floor(j / 10)) {
      degit = j % 10;
      if (degit && !(degit % 3)) count += 1;
    }
  }
  return count;
}

module.exports = problem3;
