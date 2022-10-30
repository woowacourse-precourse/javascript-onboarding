function problem3(number) {
  // number는 1이상 10000이하인 자연수이다.
  if (number < 1 || number > 10000 || Number.isInteger(number) !== true) {
    return -1;
  }

  let clapCount = 0;

  for (let i = 0; i <= number; i++) {
    clapCount += getClapCount(i);
  }
  return clapCount;
}

module.exports = problem3;
