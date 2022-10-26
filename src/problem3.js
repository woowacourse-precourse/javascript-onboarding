function problem3(number) {
  return playGame(number);
}

const playGame = (number) => {
  let answer = 0;
  for (let currentValue = 1; currentValue <= number; currentValue++) {
    answer += search369(currentValue);
  }
  return answer;
};

const search369 = (currentValue) => {
  let clap = 0;
  String(currentValue)
    .split('')
    .forEach((number) => {
      if (number === '3' || number === '6' || number === '9') {
        clap += 1;
      }
    });
  return clap;
};

module.exports = problem3;
