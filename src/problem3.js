function problem3(number) {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 10000;
  const threeSixNine = ['3', '6', '9'];
  const getThreeSixNineCountUntilZero = (number) => {
    let count = 0;
    do {
      [...String(number)].forEach((digitNumber) => {
        if (threeSixNine.includes(digitNumber)) {
          count = count + 1;
        }
      });
      number = number - 1;
    } while (number > 0);
    return count;
  };

  if (typeof number !== 'number' || number < MIN_NUMBER || number > MAX_NUMBER) {
    throw new Error('number는 숫자형만 가능하며, 1이상 10,000이하인 자연수만 가능합니다.');
  }

  return getThreeSixNineCountUntilZero(number);
}

module.exports = problem3;
