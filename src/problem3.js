function problem3(number) {
  var answer;
  answer = countClap(number);
  return answer;
}

function countClap(number) {
  let clap = 0;
  while (number > 2) {
    clap = isThreeSixNine(number, clap);
    number--;
  }
  return clap;
}

function isThreeSixNine(number, clap) {
  while (number > 0) {
    if (number % 10 === 3 || number % 10 === 6 || number % 10 === 9) {
      clap++;
    }
    number = parseInt(number / 10, 10);
  }
  return clap;
}

module.exports = problem3;
