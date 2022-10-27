function problem3(number) {
  let answer;
  const MINIMUM_NUMBER = 1;
  const MAXIMAL_NUMBER = 10000;

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

  // - [ ] 3, 6, 9 숫자 세기

  return answer;
}

module.exports = problem3;
