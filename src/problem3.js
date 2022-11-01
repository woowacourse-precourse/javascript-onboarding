function problem3(number) {
  let clap = 0;

  if (number < 0 || 10000 < number) {
  }

  for (let i = 0; i <= number; i++) {
    clap += getClap(i);
  }

  return clap;
}

module.exports = problem3;
