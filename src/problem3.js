function problem3(number) {
  let answer;
  const MINIMUM_NUMBER = 1;
  const MAXIMAL_NUMBER = 10000;
  const CLAP_NUMBER_REGEX = /[3,6,9]/g;

  // - [x] number는 1 이상 10,000 이하인 자연수이다.
  const isAllowNumberRange = (number, min, max) => {
    if (!typeof number === 'number') {
      return false;
    }
    return number >= min && number <= max;
  };

  if (!isAllowNumberRange(number, MINIMUM_NUMBER, MAXIMAL_NUMBER)) {
    throw new Error('number는 1 이상 10,000 이하인 자연수이다.');
  }

  // - [x] 3, 6, 9 숫자 세기
  let spreadNumbers = [];
  for (let i = 0; i < number; i++) {
    spreadNumbers.push(i + 1);
  }

  const matchNumbers = spreadNumbers.join('').matchAll(CLAP_NUMBER_REGEX);
  const matchNumbersToArray = [...matchNumbers];
  answer = matchNumbersToArray.length;

  return answer;
}

module.exports = problem3;
