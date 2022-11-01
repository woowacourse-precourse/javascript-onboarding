function problem3(number) {
  let clap = 0;
  const regex365 = /3|6|9/g;
  
  for (let i = 1; i <= number; i++) {
    clap += (String(i).match(regex365) || []).length;
  }

  return clap;
}

module.exports = problem3;
