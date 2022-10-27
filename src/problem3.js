function problem3(number) {
  let clap = 0;

  const num = number.toString().split("");

  for (el of num) {
    if (el % 3 === 0 && el > 0) {
      clap += 1;
    }
  }

}

module.exports = problem3;
