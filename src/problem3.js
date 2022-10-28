function problem3(number) {
  var answer;
  let clap = 0;

  for (let i = 1; i <= number; i++) {
    clap += (String(i).match(/3|6|9/g) || []).length;
  }
  return clap;
  return answer;
}

module.exports = problem3;
