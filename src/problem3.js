function problem3(number) {
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
