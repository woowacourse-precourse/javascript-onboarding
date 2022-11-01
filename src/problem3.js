function problem3(number) {
  let clap = 0;
  const regex369 = /3|6|9/g;

  for (let num = 1; num <= number; num++) {
    clap += (String(num).match(regex369) || []).length;
  }
  return clap;
}
module.exports = problem3;
