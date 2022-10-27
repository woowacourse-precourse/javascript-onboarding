function problem3(number) {
  if (validateNumber(number)) {
    return playGame(number);
  }
  return -1;
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

const validateNumber = (number) => {
  if (typeof number !== 'number') {
    return false;
  }
  if (number < 1 || number > 10000) {
    return false;
  }
  return true;
};

module.exports = problem3;
