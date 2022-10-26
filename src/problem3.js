function problem3(number) {
  if (typeof number !== 'number' || number < 1 || number > 1000) {
    throw new Error(
      'number는 숫자형만 가능하며, 1이상 10,000이하인 자연수만 가능합니다.'
    );
  }

  const container369 = ['3', '6', '9'];
  const count369 = (number, count) => {
    if (number === 0) {
      return count;
    }

    [...String(number)].forEach((character) => {
      if (container369.includes(character)) {
        count++;
      }
    });
    return count369(number - 1, count);
  };
  return count369(number, 0);
}

module.exports = problem3;
