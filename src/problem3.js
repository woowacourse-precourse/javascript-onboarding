function problem3(number) {
  let clap = 0;
  for (let i = 1; i <= number; i++) {
    const arr = String(i).match(/[3|6|9]/g);

    if (arr) {
      clap += arr.length;
    }
  }
  return clap;
}

module.exports = problem3;
