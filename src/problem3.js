function problem3(number) {
  let rule = /3|6|9/g;
  let clap = 0;
  if (typeof number !=='number'){return number}
  for (let i = 0; i <= number; i++) {
    clap += (String(i).match(rule) || []).length;
  }
  return clap;
}

module.exports = problem3;
