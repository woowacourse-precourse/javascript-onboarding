function problem3(number) {
  let clap = 0;
  const clapNum = /3|6|9/g;
  
  for (let i=1; i<=number; i++) {
    const matchNum = i.toString().match(clapNum);

    if (matchNum !== null) clap += matchNum.length;
  }

  return clap;
}

module.exports = problem3;
