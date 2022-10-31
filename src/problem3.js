const CLAP_NUMBER_REGEX = /[369]/;
const CLAP_NUMBERS = [3, 6, 9];

function hasClapNumber(number) {
  return CLAP_NUMBER_REGEX.test(`${number}`);
}

function getClapCount(number) {
  return `${number}`.split('').filter((digit) => CLAP_NUMBERS.includes(+digit))
    .length;
}

function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    if (hasClapNumber(i)) {
      answer += getClapCount(i);
    }
  }

  return answer;
}

module.exports = problem3;
